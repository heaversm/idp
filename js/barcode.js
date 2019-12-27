$(function () {

  var recognizedCode; //holds the scanned barcode

  var resultCollector = Quagga.ResultCollector.create({
    capture: true,
    capacity: 20,
    blacklist: [{
      code: "WIWV8ETQZ1", format: "code_93"
    }, {
      code: "EH3C-%GU23RK3", format: "code_93"
    }, {
      code: "O308SIHQOXN5SA/PJ", format: "code_93"
    }, {
      code: "DG7Q$TV8JQ/EN", format: "code_93"
    }, {
      code: "VOFD1DB5A.1F6QU", format: "code_93"
    }, {
      code: "4SO64P4X8 U4YUU1T-", format: "code_93"
    }],
    filter: function (codeResult) {
      // only store results which match this constraint
      // e.g.: codeResult
      return true;
    }
  });
  var App = {
    init: function () {
      var self = this;

      Quagga.init(this.state, function (err) {
        if (err) {
          return self.handleError(err);
        }
        Quagga.start();
      });
    },
    handleError: function (err) {
      console.log(err);
    },
    _accessByPath: function (obj, path, val) {
      var parts = path.split('.'),
        depth = parts.length,
        setter = (typeof val !== "undefined") ? true : false;

      return parts.reduce(function (o, key, i) {
        if (setter && (i + 1) === depth) {
          if (typeof o[key] === "object" && typeof val === "object") {
            Object.assign(o[key], val);
          } else {
            o[key] = val;
          }
        }
        return key in o ? o[key] : {};
      }, obj);
    },
    applySetting: function (setting, value) {
      var track = Quagga.CameraAccess.getActiveTrack();
      if (track && typeof track.getCapabilities === 'function') {
        switch (setting) {
          case 'zoom':
            return track.applyConstraints({ advanced: [{ zoom: parseFloat(value) }] });
          case 'torch':
            return track.applyConstraints({ advanced: [{ torch: !!value }] });
        }
      }
    },
    setState: function (path, value) {
      var self = this;

      if (typeof self._accessByPath(self.inputMapper, path) === "function") {
        value = self._accessByPath(self.inputMapper, path)(value);
      }

      if (path.startsWith('settings.')) {
        var setting = path.substring(9);
        return self.applySetting(setting, value);
      }
      self._accessByPath(self.state, path, value);

      console.log(JSON.stringify(self.state));
      Quagga.stop();
      App.init();
    },
    inputMapper: {
      inputStream: {
        constraints: function (value) {
          if (/^(\d+)x(\d+)$/.test(value)) {
            var values = value.split('x');
            return {
              width: { min: parseInt(values[0]) },
              height: { min: parseInt(values[1]) }
            };
          }
          return {
            deviceId: value
          };
        }
      },
      numOfWorkers: function (value) {
        return parseInt(value);
      },
      decoder: {
        readers: function (value) {
          if (value === 'ean_extended') {
            return [{
              format: "ean_reader",
              config: {
                supplements: [
                  'ean_5_reader', 'ean_2_reader'
                ]
              }
            }];
          }
          return [{
            format: value + "_reader",
            config: {}
          }];
        }
      }
    },
    state: {
      inputStream: {
        type: "LiveStream",
        constraints: {
          width: { min: 640 },
          height: { min: 480 },
          facingMode: "environment",
          aspectRatio: { min: 1, max: 2 }
        }
      },
      locator: {
        patchSize: "medium",
        halfSample: true
      },
      numOfWorkers: 2,
      frequency: 10,
      decoder: {
        readers: [{
          format: "code_128_reader",
          config: {}
        }]
      },
      locate: true
    },
    lastResult: null
  };

  App.init();

  Quagga.onProcessed(function (result) {
    var drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        result.boxes.filter(function (box) {
          return box !== result.box;
        }).forEach(function (box) {
          Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
      }
    }
  });

  Quagga.onDetected(function (result) {
    if (!recognizedCode) {
      recognizedCode = result.codeResult.code;
      //Quagga.stop();
      $('body').addClass('out');
      $('.barcode__title').html('Success. One moment please.');
      console.log(recognizedCode);
      //TODO: log to local storage
      setTimeout(()=>{
        Quagga.stop();
        $('body').addClass('done');
        setTimeout(()=>{
          window.location="collectives.html"
        },500);
        
      },2000);
    }

  });

});