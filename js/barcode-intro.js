(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.s1circledark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(4,0,1).p("AFeAAQAACRhmBnQhnBmiRAAQiQAAhnhmQhmhnAAiRQAAiQBmhnQBnhmCQAAQCRAABnBmQBmBnAACQg");
	this.shape.setTransform(0,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF99").s().p("Aj3D4QhmhnAAiRQAAiQBmhmQBnhnCQAAQCRAABnBnQBmBmAACQQAACRhmBnQhnBmiRAAQiQAAhnhmg");
	this.shape_1.setTransform(0,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.s1circledark, new cjs.Rectangle(-37,-2,74,74), null);


(lib.redline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC0000").ss(15,1,1).p("Eg5MAAAMByZAAA");
	this.shape.setTransform(366.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.redline, new cjs.Rectangle(-7.5,-7.5,747.2,15), null);


// stage content:
(lib.barcode = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// s1slice5
	this.instance = new lib.redline();
	this.instance.setTransform(894.3,432.35,0.0657,1,0,0,0,366.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50).to({_off:false},0).to({regY:0,scaleX:1.1913,x:894.25,y:432.25},6).to({scaleX:1},2).wait(6).to({x:909,y:866.35},8).to({x:894.25,y:432.25},10).wait(3).to({regY:0.1,scaleX:0.0657,x:894.3,y:432.35},4).to({_off:true},1).wait(1));

	// digits-mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_30 = new cjs.Graphics().p("AhKFFIAAqJICVAAIAAKJg");
	var mask_graphics_31 = new cjs.Graphics().p("AjQFFIAAqJIGhAAIAAKJg");
	var mask_graphics_32 = new cjs.Graphics().p("AlWFFIAAqJIKtAAIAAKJg");
	var mask_graphics_33 = new cjs.Graphics().p("AndFFIAAqJIO7AAIAAKJg");
	var mask_graphics_34 = new cjs.Graphics().p("ApjFFIAAqJITHAAIAAKJg");
	var mask_graphics_35 = new cjs.Graphics().p("ArpFFIAAqJIXUAAIAAKJg");
	var mask_graphics_36 = new cjs.Graphics().p("AtwFFIAAqJIbhAAIAAKJg");
	var mask_graphics_37 = new cjs.Graphics().p("Av2FFIAAqJIftAAIAAKJg");
	var mask_graphics_38 = new cjs.Graphics().p("Ax8FFIAAqJMAj5AAAIAAKJg");
	var mask_graphics_39 = new cjs.Graphics().p("A0CFFIAAqJMAoFAAAIAAKJg");
	var mask_graphics_40 = new cjs.Graphics().p("A2JFFIAAqJMAsTAAAIAAKJg");
	var mask_graphics_41 = new cjs.Graphics().p("A4PFFIAAqJMAwfAAAIAAKJg");
	var mask_graphics_42 = new cjs.Graphics().p("A6VFFIAAqJMA0rAAAIAAKJg");
	var mask_graphics_43 = new cjs.Graphics().p("A8cFFIAAqJMA44AAAIAAKJg");
	var mask_graphics_44 = new cjs.Graphics().p("A+iFFIAAqJMA9FAAAIAAKJg");
	var mask_graphics_45 = new cjs.Graphics().p("EggoAFFIAAqJMBBRAAAIAAKJg");
	var mask_graphics_46 = new cjs.Graphics().p("EgiuAFFIAAqJMBFdAAAIAAKJg");
	var mask_graphics_47 = new cjs.Graphics().p("Egk1AFFIAAqJMBJrAAAIAAKJg");
	var mask_graphics_48 = new cjs.Graphics().p("Egm7AFFIAAqJMBN3AAAIAAKJg");
	var mask_graphics_49 = new cjs.Graphics().p("EgpBAFFIAAqJMBSDAAAIAAKJg");
	var mask_graphics_50 = new cjs.Graphics().p("EgrIAFFIAAqJMBWRAAAIAAKJg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(30).to({graphics:mask_graphics_30,x:639.65,y:794.725}).wait(1).to({graphics:mask_graphics_31,x:653.075,y:794.725}).wait(1).to({graphics:mask_graphics_32,x:666.5,y:794.725}).wait(1).to({graphics:mask_graphics_33,x:679.925,y:794.725}).wait(1).to({graphics:mask_graphics_34,x:693.375,y:794.725}).wait(1).to({graphics:mask_graphics_35,x:706.8,y:794.725}).wait(1).to({graphics:mask_graphics_36,x:720.225,y:794.725}).wait(1).to({graphics:mask_graphics_37,x:733.65,y:794.725}).wait(1).to({graphics:mask_graphics_38,x:747.075,y:794.725}).wait(1).to({graphics:mask_graphics_39,x:760.5,y:794.725}).wait(1).to({graphics:mask_graphics_40,x:773.975,y:794.725}).wait(1).to({graphics:mask_graphics_41,x:787.4,y:794.725}).wait(1).to({graphics:mask_graphics_42,x:800.825,y:794.725}).wait(1).to({graphics:mask_graphics_43,x:814.25,y:794.725}).wait(1).to({graphics:mask_graphics_44,x:827.675,y:794.725}).wait(1).to({graphics:mask_graphics_45,x:841.1,y:794.725}).wait(1).to({graphics:mask_graphics_46,x:854.525,y:794.725}).wait(1).to({graphics:mask_graphics_47,x:867.975,y:794.725}).wait(1).to({graphics:mask_graphics_48,x:881.4,y:794.725}).wait(1).to({graphics:mask_graphics_49,x:894.825,y:794.725}).wait(1).to({graphics:mask_graphics_50,x:908.25,y:794.725}).wait(41));

	// barcode-digits
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCD5QgYAAgUgHQgUgHgOgNQgPgMgKgSQgJgRgDgVIAAgEQgBgNAKgHQAJgHAKAAQAJAAAGAFQAIAFACANQADAVAPAPQAPANAdAAIAGAAQANAAAKgFIAUgNQAIgIAFgLQAFgLAAgNIAAhbQgOAPgTAFIgdAFIgFAAQgYAAgWgJQgUgJgQgQQgQgPgJgUQgIgVAAgYIAAhXQAAgZAIgUQAJgWAQgPQAQgQAUgIQAWgJAYAAIAGAAQAYAAAVAJQAVAIAPAQQAQAPAJAWQAJAUAAAZIAAEMQAAAagJAVQgJAVgQAPQgPAOgVAJQgVAIgYAAgAguixQgSASAAAaIAABXQAAAZASASQASARAaAAIAFAAQAZAAASgRQATgSAAgbIAAhVQAAgagSgSQgSgRgZAAIgGAAQgaAAgSARg");
	this.shape.setTransform(1148.9988,794.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgED5QgWAAgWgJQgVgIgPgQQgQgPgJgUQgJgWABgXIAAhDQAAgaALgVQANgWASgPQgSgRgNgWQgLgVAAgbIAAggQgBgYAJgUQAJgWAQgPQAPgQAVgIQAVgJAXAAIAHAAQAYAAAVAJQAUAIAQAQQAQAPAKAWQAJAUgBAYIAAAgQABAbgMAVQgNAWgSARQASAPANAWQAMAVgBAaIAABDQABAXgJAWQgKAUgPAPQgPAQgWAIQgUAJgZAAgAgtAcQgTASAAAZIAABAQAAAZASARQASASAYAAIAHAAQAaAAASgSQARgRABgZIAAhAQgBgZgSgSQgSgRgZAAIgFAAQgaAAgRARgAguixQgSASAAAYIAAAgQAAANAFALQAFAKAJAJQAHAHAMAFQALAFAMABIAGAAQANAAALgFQALgFAIgIQAJgJAEgKQAGgLAAgNIAAggQgBgYgRgSQgSgRgaAAIgHAAQgYAAgSARg");
	this.shape_1.setTransform(1087.95,794.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8DvQgIgHAAgLIABgIIB9mWIh7AAIAAAlQgBAOgHAHQgJAGgKAAQgKAAgIgGQgJgHAAgOIAAg/QgBgLAJgIQAIgIALAAICyAAQARAAAJAIQAJAJgBAOIgDAQIiEGrQgEALgGAEQgHAEgIAAQgMAAgIgIg");
	this.shape_2.setTransform(1026.85,794.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDD5QgXAAgWgJQgUgIgQgQQgQgPgJgUQgIgWgBgXIAAkNQABgXAIgWQAJgUAQgQQAQgQAUgJQAWgJAXAAIAHAAQAwAAAeAbQAfAbAEApIABADQAAAOgJAHQgJAHgKAAQgIAAgIgFQgIgGgCgMQgDgVgOgPQgNgOgeABIgGAAQgNAAgMAEIgTAOQgIAIgGALQgEALAAANIAABZIARgLIATgHIAQgDIAKgBIAGAAQAXAAAWAJQAUAJAQAPQAQAPAIAVQAJAUAAAYIAABZQAAAXgJAWQgIAUgQAPQgQAQgUAIQgWAJgXAAgAgtACQgTAOAAAbIAABcQAAAZASARQASASAZAAIAHAAQAZAAASgSQARgRAAgZIAAhYQAAgZgRgRQgSgRgZAAIgGAAQgYAAgTAOg");
	this.shape_3.setTransform(965.85,794.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFD3QgXAAgVgIQgUgIgPgPQgPgQgIgWQgIgXAAgcQAAgNAIgHQAJgHAKAAQAKAAAIAHQAJAHAAANQAAAmAPAOQAQAOAZAAIAHAAQAYAAATgRQASgSAAgZIAAhvQAAgYgSgSQgSgSgZAAIgHAAQgQABgOAHQgOAJgHANQgKANgRAAQgLAAgJgFQgJgIAAgNIAAjGQAAgLAIgIQAJgIAKAAICfAAQANAAAIAIQAHAJAAAKQAAAJgHAJQgHAJgNgBIiFAAIAAB5QAIgIAPgGQAQgFAOgBIAHAAQAXABAVAIQAVAJAPAQQAQAQAJAUQAJAVAAAXIAABwQAAAXgIAWQgJAUgQAPQgPAQgVAIQgVAJgYAAg");
	this.shape_4.setTransform(904.775,794.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAfDyQgJgGAAgOIAAhWIh9AAQgPAAgIgKQgJgKAAgMIAEgQICMlAQAIgQAPAAQANAAAIAIQAIAHAAALIgBAFIgBAGIiCElIBdAAIAAg6QAAgNAIgHQAJgFAKgBQAKABAJAFQAIAHAAANIAAA6IAgAAQAPgBAGAJQAHAJAAAKQAAAJgHAJQgGAJgOAAIggAAIAABWQAAAOgJAGQgIAHgKAAQgKAAgJgHg");
	this.shape_5.setTransform(843.775,794.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgGD5QgYAAgVgJQgUgJgQgQQgQgPgIgVQgJgUAAgYQgBgPAJgGQAJgGAKAAQAJAAAJAGQAJAGAAAPQAAAYARASQASASAZAAIANAAQAYAAATgRQASgSAAgZIAAgxQgBgZgFgPQgEgQgLgHQgKgIgQgDIgjgCQgOAAgHgJQgHgHAAgKQAAgKAHgIQAHgJAOAAIAcgCQAPgBAMgHQAMgHAHgPQAIgQAAgbIAAgRQAAgOgGgLQgGgMgJgHQgJgIgMgEIgXgDIgWADQgMAEgJAHQgKAHgFAMQgFALgBAPQAAANgIAIQgIAGgKAAQgKAAgJgGQgIgIAAgNQAAgdAKgUQALgWAPgOQARgOAWgHQAUgHAWAAQAWAAAVAHQAVAHARAOQAQAOALAWQALAUAAAdIAAARQAAAogMAXQgMAYgQAPQASAPALAYQALAaAAAmIAAAxQAAAXgKAWQgKAUgPAPQgQAQgUAIQgVAJgXAAg");
	this.shape_6.setTransform(782.7,794.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhaD3QgLAAgHgGQgHgGgCgJIgBgTQABgKAFgIICgkNQAKgQACgKIACgUIAAgEQAAgagQgSQgQgTgdAAIgBAAQgNAAgLAFQgKAFgJAIQgHAIgEALQgGALAAAMIAAAIQAAANgIAHQgIAHgKAAQgKAAgJgHQgJgHAAgNIAAgIQAAgXAJgVQAKgVAPgQQAPgPAVgJQAUgIAYAAIABAAQAXAAAVAIQAVAJAQAPQAPAQAKAUQAIAVABAYIAAAFIgEAhQgDARgMAVIiVD6ICPAAQAOAAAHAJQAHAJAAAJQABAKgIAJQgGAIgOAAg");
	this.shape_7.setTransform(721.65,794.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYDyQgJgGAAgOIAAmEIghAzQgIAKgLABQgKABgJgHQgIgFgDgLQgDgKAIgLIBDhbQAGgKAQAAIAXAAQAKAAAFAGQAEAGAAALIAAG/QAAAOgIAGQgJAHgKAAQgJAAgJgHg");
	this.shape_8.setTransform(658.8341,794.25);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},30).wait(61));

	// barcode-mask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_6 = new cjs.Graphics().p("Eg5MAJYIAAyvMByZAAAIAASvg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Eg5MAKgIAA0/MByZAAAIAAU/g");
	var mask_1_graphics_8 = new cjs.Graphics().p("Eg5MALpIAA3RMByZAAAIAAXRg");
	var mask_1_graphics_9 = new cjs.Graphics().p("Eg5MAMxIAA5hMByZAAAIAAZhg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Eg5MAN5IAA7xMByZAAAIAAbxg");
	var mask_1_graphics_11 = new cjs.Graphics().p("Eg5MAPBIAA+CMByZAAAIAAeCg");
	var mask_1_graphics_12 = new cjs.Graphics().p("Eg5MAQKMAAAggTMByZAAAMAAAAgTg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Eg5MARSMAAAgijMByZAAAMAAAAijg");
	var mask_1_graphics_14 = new cjs.Graphics().p("Eg5MASaMAAAgk0MByZAAAMAAAAk0g");
	var mask_1_graphics_15 = new cjs.Graphics().p("Eg5MATjMAAAgnFMByZAAAMAAAAnFg");
	var mask_1_graphics_16 = new cjs.Graphics().p("Eg5MAUrMAAAgpVMByZAAAMAAAApVg");
	var mask_1_graphics_17 = new cjs.Graphics().p("Eg5MAV0MAAAgrnMByZAAAMAAAArng");
	var mask_1_graphics_18 = new cjs.Graphics().p("Eg5MAW8MAAAgt3MByZAAAMAAAAt3g");
	var mask_1_graphics_19 = new cjs.Graphics().p("Eg5MAYEMAAAgwHMByZAAAMAAAAwHg");
	var mask_1_graphics_20 = new cjs.Graphics().p("Eg5MAZMMAAAgyXMByZAAAMAAAAyXg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Eg5MAaUMAAAg0oMByZAAAMAAAA0og");
	var mask_1_graphics_22 = new cjs.Graphics().p("Eg5MAbdMAAAg25MByZAAAMAAAA25g");
	var mask_1_graphics_23 = new cjs.Graphics().p("Eg5MAclMAAAg5JMByZAAAMAAAA5Jg");
	var mask_1_graphics_24 = new cjs.Graphics().p("Eg5MAduMAAAg7aMByZAAAMAAAA7ag");
	var mask_1_graphics_25 = new cjs.Graphics().p("Eg5MAe2MAAAg9rMByZAAAMAAAA9rg");
	var mask_1_graphics_26 = new cjs.Graphics().p("Eg5MAf+MAAAg/7MByZAAAMAAAA/7g");
	var mask_1_graphics_27 = new cjs.Graphics().p("Eg5MAhHMAAAhCNMByZAAAMAAABCNg");
	var mask_1_graphics_28 = new cjs.Graphics().p("Eg5MAiPMAAAhEdMByZAAAMAAABEdg");
	var mask_1_graphics_29 = new cjs.Graphics().p("Eg5MAjXMAAAhGtMByZAAAMAAABGtg");
	var mask_1_graphics_30 = new cjs.Graphics().p("Eg5MAkfMAAAhI9MByZAAAMAAABI9g");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(6).to({graphics:mask_1_graphics_6,x:894.25,y:404.2}).wait(1).to({graphics:mask_1_graphics_7,x:894.25,y:411.425}).wait(1).to({graphics:mask_1_graphics_8,x:894.25,y:418.675}).wait(1).to({graphics:mask_1_graphics_9,x:894.25,y:425.9}).wait(1).to({graphics:mask_1_graphics_10,x:894.25,y:433.125}).wait(1).to({graphics:mask_1_graphics_11,x:894.25,y:440.35}).wait(1).to({graphics:mask_1_graphics_12,x:894.25,y:447.6}).wait(1).to({graphics:mask_1_graphics_13,x:894.25,y:454.825}).wait(1).to({graphics:mask_1_graphics_14,x:894.25,y:462.05}).wait(1).to({graphics:mask_1_graphics_15,x:894.25,y:469.3}).wait(1).to({graphics:mask_1_graphics_16,x:894.25,y:476.525}).wait(1).to({graphics:mask_1_graphics_17,x:894.25,y:483.75}).wait(1).to({graphics:mask_1_graphics_18,x:894.25,y:491.025}).wait(1).to({graphics:mask_1_graphics_19,x:894.25,y:498.25}).wait(1).to({graphics:mask_1_graphics_20,x:894.25,y:505.475}).wait(1).to({graphics:mask_1_graphics_21,x:894.25,y:512.7}).wait(1).to({graphics:mask_1_graphics_22,x:894.25,y:519.95}).wait(1).to({graphics:mask_1_graphics_23,x:894.25,y:527.175}).wait(1).to({graphics:mask_1_graphics_24,x:894.25,y:534.4}).wait(1).to({graphics:mask_1_graphics_25,x:894.25,y:541.65}).wait(1).to({graphics:mask_1_graphics_26,x:894.25,y:548.875}).wait(1).to({graphics:mask_1_graphics_27,x:894.25,y:556.1}).wait(1).to({graphics:mask_1_graphics_28,x:894.25,y:563.325}).wait(1).to({graphics:mask_1_graphics_29,x:894.25,y:570.575}).wait(1).to({graphics:mask_1_graphics_30,x:894.25,y:577.8}).wait(61));

	// barcode
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#66FF99").s().p("AgBFiQgGgBgCgJIAAgQIAAqOIAAgRQABgKAKABQAHABAAALIAAASIgBKJIACARQAAAKgKAAIgBAAg");
	this.shape_9.setTransform(1082.6753,613.2527,3.7247,3.7247);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66FF99").s().p("AgHFTIABgQIAAqEIgBgQQABgKAFABQAJAAAAALQABAFgCAMIABKAIAAAQQgBAIgHABIAAAAQgHAAAAgIg");
	this.shape_10.setTransform(907.4832,613.2654,3.7247,3.7247);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66FF99").s().p("AgJFXIAAgRIAAqJQgBgNABgFQACgKAIAAQAIABABAKQAAAGgBAMIAAKEIABATQgBAKgHABIgCAAQgIAAgBgJg");
	this.shape_11.setTransform(741.2691,613.2041,3.7247,3.7247);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66FF99").s().p("AgJFZIABgRIAAqKIgBgTQAAgLAIgBQAKgBABAKQABAGgCAMIABKPIAAAQQgCAJgGAAIgBAAQgKAAAAgJg");
	this.shape_12.setTransform(674.4622,613.2349,3.7247,3.7247);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66FF99").s().p("AABFlQgLAAgBgMIABgTIAAlCIAAlMIAAgSQABgJAJgBQAKAAACAJIAAASIAAKSIAAASQgBAKgJAAIgBAAg");
	this.shape_13.setTransform(1192.7708,613.8235,3.7247,3.7247);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66FF99").s().p("AgJFYIACgQIAAqKIgBgTQAAgLAHgBQAIgBADAKIAAASIAAKPIAAAQQgCAJgHAAQgKAAAAgKg");
	this.shape_14.setTransform(1181.5968,613.6027,3.7247,3.7247);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66FF99").s().p("AgCFkQgIAAgBgLIABgSIAAqKQgCgOABgHQABgLAKgBQALAAABAMQABAGgCAPIAAKJIABAUQgBALgLAAIgCgBg");
	this.shape_15.setTransform(1003.875,613.8242,3.7247,3.7247);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66FF99").s().p("AgLFaIABgVIAAqJQgBgNAAgHQABgMALABQAKAAAAANIgBAUIAAKFIACAUQgBAMgJABIgCAAQgKAAgBgKg");
	this.shape_16.setTransform(919.5419,613.742,3.7247,3.7247);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66FF99").s().p("AgLFbIABgSIAAqQIgBgSQABgLAJAAQAMAAABALQAAAHgCANIAAKLIACATQgBAMgLAAQgKAAgBgKg");
	this.shape_17.setTransform(1167.9272,613.82,3.7247,3.7247);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66FF99").s().p("AgBFlQgJgBgBgKIABgSIAAqQIgBgSQACgKAJAAQAMAAAAAMQABAGgCANIAAFEIAAFHIABAUQgBALgLAAIgBAAg");
	this.shape_18.setTransform(807.5328,613.828,3.7247,3.7247);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66FF99").s().p("AgKFYIACgUIAAqJIgBgSQABgLAHAAQALgBABAMQABAGgCAOIAAKJIABASQgBALgIAAIgBAAQgKAAgBgLg");
	this.shape_19.setTransform(700.386,613.7308,3.7247,3.7247);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66FF99").s().p("AgBFlQgIAAgBgKIAAgPIAAqUIAAgSQABgKAJAAQALABABALQAAAHgCANIABFHIgBFIIABARQgBAJgKAAIgBAAg");
	this.shape_20.setTransform(638.0596,613.8243,3.7247,3.7247);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66FF99").s().p("AgMGWIABgVIABsBQgCgOABgHQABgLAKAAQAMAAABALQAAAHgBAOQABGAgBGBIABAVQgCALgLAAQgLAAgBgLg");
	this.shape_21.setTransform(619.565,636.2651,3.7247,3.7247);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66FF99").s().p("AAAFnQgJgBgDgKIAAgSIgBp6QABgUABgTQABgOAKAAQAMgBABARIAAAjIAAJ/IgBARQgCAJgJAAIgBAAg");
	this.shape_22.setTransform(831.7557,613.8185,3.7247,3.7247);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66FF99").s().p("AgBFnQgNgBgBgNIACgXQgCkfABllQgCgQABgHQABgNAOAAQAPAAABAOQABAIgDARIABFBIgBE+IACAZQgBAOgPAAIgBAAg");
	this.shape_23.setTransform(939.4736,613.827,3.7247,3.7247);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66FF99").s().p("AgBFnQgMgBgCgNIABgYIAAlCIABk+QgDgRABgIQABgOAQABQANAAAAAOQABAHgCAQQABFAgBFAIACAZQgCAOgOAAIgBAAg");
	this.shape_24.setTransform(852.2814,614.0009,3.7247,3.7247);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66FF99").s().p("AgBFnQgNAAgCgNIACgXIAAqFQgCgQABgHQABgNAOAAQAPAAABAOQABAIgCARIAAKAIABAZQgCANgOAAIgBAAg");
	this.shape_25.setTransform(757.1378,613.9202,3.7247,3.7247);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#66FF99").s().p("AgRFaIACgZIAAqDQgDgRACgHQACgOAQABQAOABACANQAAAHgCAPIAAKEIACAZQgCAOgQAAIAAAAQgPAAgCgOg");
	this.shape_26.setTransform(1117.5392,613.8932,3.7247,3.7247);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#66FF99").s().p("AgPFcIABgXIAAqJQgCgPABgHQABgMAOgBQAOAAACAMQACAHgCAPQABFFgBFFIAAAWQgBAMgPABIAAAAQgOAAgBgMg");
	this.shape_27.setTransform(983.8736,613.917,3.7247,3.7247);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#66FF99").s().p("AAAGjQgSAAgBgSQACgVAAgJIgBl0QAAkeABhRQgEgWABgKQAAgTAVAAQATAAABASQABAKgEAUQABFLgBGdIACAeQgBARgSAAIgBgBg");
	this.shape_28.setTransform(1210.3713,636.3686,3.7247,3.7247);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#66FF99").s().p("AgBFoQgOAAgCgMIgBgXIAAqLIAAgVQADgNAPAAQAQAAACAOQABAHgCARIAAKeQgCANgPAAIgBgBg");
	this.shape_29.setTransform(1019.5064,614.0103,3.7247,3.7247);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#66FF99").s().p("AgVFZIABgaIAAp/QgCgSABgIQADgPATABQATABACAPQABAIgDASIAAFBIAAE5IABAdQgCAQgUAAQgSgBgCgPg");
	this.shape_30.setTransform(1048.9398,613.905,3.7247,3.7247);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#66FF99").s().p("AgTGWIABgaIAAl+IAAl5QgDgSABgIQACgPATAAQARABACANQACAIgCARIAAL8IAAAZQgDANgQAAIgBAAQgRAAgCgPg");
	this.shape_31.setTransform(603.3194,636.2651,3.7247,3.7247);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#66FF99").s().p("AgEFpQgTgBgBgQIACgaQgBk+ABk+QgDgRABgJQABgPATgBQAVgBAGAPQADAHAAAYIAAJ3QAAAWgEAJQgGAOgRAAIgDAAg");
	this.shape_32.setTransform(723.7265,613.9308,3.7247,3.7247);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#66FF99").s().p("AgBFqQgTgBgEgNIAAgaIAAqEIABgaQADgNAUAAQAUAAAEAOIABAcIAAKAQAAAYgCAEQgEANgTAAIgBAAg");
	this.shape_33.setTransform(657.4869,613.9172,3.7247,3.7247);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#66FF99").s().p("AAAFqQgUAAgEgMQgCgFAAgUIAAqJQAAgUADgFQAEgMATAAQAUgBAFANQACAEgBAYIAAKDQABAXgCAFQgFAMgTAAIgBAAg");
	this.shape_34.setTransform(891.3506,613.917,3.7247,3.7247);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#66FF99").s().p("AgbFhQgHgJAAgWQABlAgBlAQAAgXAEgIQAHgNAXAAQAZAAAGANQAEAHAAAYIgBKAQAAAXgCAGQgGAMgXAAQgWAAgIgKg");
	this.shape_35.setTransform(1143.785,613.917,3.7247,3.7247);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#66FF99").s().p("AgBFrQgVAAgHgLQgFgIAAgWQABlCgBlCQAAgVAFgIQAHgLAVAAQAXgBAIAMQAFAJAAAXIAAJ/QAAAXgFAJQgIALgWAAIgBAAg");
	this.shape_36.setTransform(783.6219,613.917,3.7247,3.7247);

	var maskedShapeInstanceList = [this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},6).wait(85));

	// i-desc
	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgNAXQgGgGAAgLIAAgLQAAgKAGgGQAHgFAGAAQAHAAAHAFQAHAGgBAKIAAALQABALgHAGQgHAEgHAAQgGAAgHgEg");
	this.shape_37.setTransform(1564.8,333.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AA3CFQgHgFAAgLIAAikQAAgTgNgPQgOgOgTAAIgEAAQgSAAgOAOQgNAOAAAUIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAHAAAGAEQAGAEABAJQAIgIAMgFQAMgEAOAAIAEAAQARAAAQAFQAPAGAMALQAMALAHARQAHARAAAXIAACkQAAALgGAFQgHAFgHAAQgIAAgGgFg");
	this.shape_38.setTransform(1547.775,322.725);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_39.setTransform(1523.025,322.725);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_40.setTransform(1498.925,322.725);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag+CFQgGgGAAgLIAAjoQAAgKAGgFQAHgGAIAAIAKADQAFACACAGIAKgFIALgEIARgCQAQAAAPAGQAPAHAKAOQAFAIAAAHQAAAJgGAFQgGAGgIAAQgJAAgIgIIgJgHQgFgFgLAAQgKAAgIAEQgGADgFAGIgEAMIgCANIAACtQABALgHAGQgGAFgIAAQgHAAgHgFg");
	this.shape_41.setTransform(1478.7,322.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_42.setTransform(1456.525,322.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAACKQgNAAgNgEQgOgEgMgHQgNgHgKgLQgKgKgHgNIgCgKQAAgKAGgGQAHgFAIAAIAKACQAEACAFAFQAJAOAQALQAPALAPAAIACAAQAZAAANgMQANgMABgOQAAgSgKgJQgKgKgQgFIghgIQgRgEgRgHQgPgHgKgPQgLgOAAgbQABgUAIgNQAKgOANgIQAMgJAQgDQAQgEALAAIACAAIAZADIAVAGIAPAIIAJAHQAIAHAAAKQAAAIgGAGQgFAGgIAAIgMgDIgTgKQgKgGgTAAIgCAAQgVAAgMAJQgMAKAAAMQgBAPALAHQAJAHARAFIAgAIQARAEAQAJQARAJAKAOQAKAQAAAcIAAACQAAATgIAPQgIAOgNAKQgNAKgRAFQgRAFgRAAg");
	this.shape_43.setTransform(1432.2,322.725);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_44.setTransform(1393.225,316.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AA+CIQgEgCgDgGIg3hbIg1BbQgEAGgEACIgJACQgJAAgGgGQgHgGAAgJQAAgGADgFIBChtIg9hlIgDgMQAAgIAGgHQAHgGAJAAIAIACQAFACADAGIAxBUIAyhUQAGgKAKAAQAKAAAGAGQAFAHAAAIIgDAMIg8BlIBBBtQAEAEAAAHQAAAJgGAGQgHAGgJAAg");
	this.shape_45.setTransform(1372.975,322.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_46.setTransform(1349.475,322.725);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AA3CFQgHgFAAgLIAAikQAAgTgNgPQgOgOgTAAIgEAAQgSAAgOAOQgNAOAAAUIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAHAAAGAEQAGAEABAJQAIgIAMgFQAMgEAOAAIAEAAQARAAAQAFQAPAGAMALQAMALAHARQAHARAAAXIAACkQAAALgGAFQgHAFgHAAQgIAAgGgFg");
	this.shape_47.setTransform(1324.825,322.725);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_48.setTransform(1281.675,322.725);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA3DAQgGgGAAgKIAAilQAAgMgFgJQgDgJgIgGQgGgFgJgDIgSgDIgQADQgJADgHAFQgHAGgEAIQgEAJAAAKIAACoQAAAKgHAGQgGAEgHAAQgIAAgHgEQgGgGAAgKIAAleQAAgLAGgFQAHgFAIAAQAHAAAGAFQAHAFAAALIAABwQAHgIANgEQAMgEAOAAIAEAAQASAAAPAGQAQAIAMAMQALAMAIARQAGAQAAASIAAClQAAAKgGAGQgHAEgIAAQgGAAgHgEg");
	this.shape_49.setTransform(1257.3,316.875);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_50.setTransform(1235.025,316.875);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_51.setTransform(1195.675,322.725);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_52.setTransform(1174.725,316.875);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_53.setTransform(1139.075,316.875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AA3CFQgHgFAAgLIAAikQAAgTgNgPQgOgOgTAAIgEAAQgSAAgOAOQgNAOAAAUIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAHAAAGAEQAGAEABAJQAIgIAMgFQAMgEAOAAIAEAAQARAAAQAFQAPAGAMALQAMALAHARQAHARAAAXIAACkQAAALgGAFQgHAFgHAAQgIAAgGgFg");
	this.shape_54.setTransform(1118.075,322.725);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_55.setTransform(1093.375,322.725);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAACKQgNAAgNgEQgOgEgMgHQgMgHgLgLQgKgKgGgNIgDgKQAAgKAGgGQAHgFAIAAIAKACQAEACAFAFQAKAOAPALQAPALAOAAIADAAQAZAAANgMQANgMAAgOQABgSgKgJQgKgKgQgFIghgIQgRgEgQgHQgQgHgKgPQgLgOAAgbQAAgUAJgNQAJgOANgIQAOgJAPgDQAQgEALAAIACAAIAZADIAVAGIAPAIIAJAHQAIAHAAAKQAAAIgFAGQgGAGgJAAIgLgDIgTgKQgKgGgTAAIgCAAQgVAAgMAJQgMAKAAAMQgBAPALAHQAJAHAQAFIAhAIQARAEAQAJQARAJAKAOQAKAQAAAcIAAACQAAATgIAPQgIAOgNAKQgNAKgRAFQgRAFgRAAg");
	this.shape_56.setTransform(1069.15,322.725);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_57.setTransform(1026.975,322.725);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgCDEQgRAAgMgEQgLgGgGgGQgBAJgFAEQgGADgIAAQgHAAgGgEQgHgFAAgKIAAlfQAAgLAHgFQAGgFAHAAQAIAAAHAFQAGAFAAALIAAByQAHgJANgFQAMgEAPAAIACAAQATAAAQAGQAPAIAMAMQALAMAIARQAGAQAAASIAABgQAAATgHAQQgHAQgLANQgMAMgQAHQgQAGgSAAgAghgYQgOALAAATIAABoQAAAVAOALQANAMASAAIAEAAQAUAAANgOQANgOAAgTIAAhgQAAgTgNgOQgNgOgUAAIgEAAQgSAAgNAMg");
	this.shape_58.setTransform(1002.35,316.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgBC/QgNgGgKgKQgKgKgFgNQgFgOAAgPIAAkpQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAAEpQAAANAHAJQAJAJAMAAQALAAAFAHQAEAHAAAHQAAAJgEAGQgFAGgLAAQgPAAgLgFg");
	this.shape_59.setTransform(963.575,316.875);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgBC/QgNgGgKgKQgKgKgFgNQgFgOAAgPIAAkpQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAAEpQAAANAHAJQAJAJAMAAQALAAAFAHQAEAHAAAHQAAAJgEAGQgFAGgLAAQgPAAgLgFg");
	this.shape_60.setTransform(947.875,316.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgNA5QgGgGAAgKIAAhRQAAgLAGgFQAGgFAHAAQAHAAAHAFQAGAFAAALIAABRQAAAKgGAGQgHAFgHAAQgHAAgGgFg");
	this.shape_61.setTransform(932.475,303.45);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AA4CGQgGgEgCgIQgHAIgMAEQgNAEgOAAIgEAAQgRAAgQgFQgQgGgLgLQgMgLgHgQQgHgRAAgXIAAilQAAgKAHgGQAGgFAHAAQAIAAAGAFQAHAFAAALIAACkQAAATANAPQAOAOASAAIAEAAQATAAAOgOQANgPAAgTIAAikQAAgLAHgFQAGgFAIAAQAHAAAHAFQAGAGAAAKIAADpQAAAKgGAGQgHAFgHAAQgHAAgGgEg");
	this.shape_62.setTransform(913.525,322.725);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_63.setTransform(888.825,322.725);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AhVC/QgGgHAAgJQAAgHAEgHQAEgGAKgBQALgBAJgLQAKgKAIgaIASg9IhHjVIgBgDIAAgEQAAgJAGgGQAGgGAJAAQANAAAGAPIA0CfIAxifQACgIAFgEQAGgDAFAAQAJAAAHAGQAGAGAAAJIgBADIAAAEIhZEfQgIAegQAVQgRAVgdAFIgDABQgJAAgFgGg");
	this.shape_64.setTransform(865.475,328.625);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AhVC/QgGgHAAgJQAAgHAEgHQAEgGAKgBQALgBAJgLQAKgKAIgaIASg9IhHjVIgBgDIAAgEQAAgJAGgGQAGgGAJAAQANAAAGAPIA0CfIAxifQACgIAFgEQAGgDAFAAQAJAAAHAGQAGAGAAAJIgBADIAAAEIhZEfQgIAegQAVQgRAVgdAFIgDABQgJAAgFgGg");
	this.shape_65.setTransform(824.925,328.625);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgBC/QgNgGgKgKQgKgKgFgNQgFgOAAgPIAAkpQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAAEpQAAANAHAJQAJAJAMAAQALAAAFAHQAEAHAAAHQAAAJgEAGQgFAGgLAAQgPAAgLgFg");
	this.shape_66.setTransform(807.225,316.875);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgBC/QgNgGgKgKQgKgKgFgNQgFgOAAgPIAAkpQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAAEpQAAANAHAJQAJAJAMAAQALAAAFAHQAEAHAAAHQAAAJgEAGQgFAGgLAAQgPAAgLgFg");
	this.shape_67.setTransform(791.525,316.875);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AA4CGQgGgEgCgIQgHAIgMAEQgNAEgOAAIgEAAQgRAAgQgFQgQgGgLgLQgMgLgHgQQgHgRAAgXIAAilQAAgKAHgGQAGgFAHAAQAIAAAGAFQAHAFAAALIAACkQAAATANAPQAOAOASAAIAEAAQATAAAOgOQANgPAAgTIAAikQAAgLAHgFQAGgFAIAAQAHAAAHAFQAGAGAAAKIAADpQAAAKgGAGQgHAFgHAAQgHAAgGgEg");
	this.shape_68.setTransform(769.825,322.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgVDAQgHgGAAgKIAAjSIgLAAQgKAAgFgHQgGgHAAgHQAAgIAGgHQAFgHAKAAIALAAIAAgtQAAgQAGgNQAFgOAJgKQAJgJAMgGQANgFAPAAQAKAAAFAGQAFAHAAAIQAAAIgFAGQgFAHgKAAQgNAAgIAJQgIAKAAAMIAAAtIAZAAQALAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgLAAIgZAAIAADSQAAAKgGAGQgGAEgHAAQgIAAgGgEg");
	this.shape_69.setTransform(749.975,316.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAACKQgMAAgOgEQgOgEgMgHQgMgHgKgLQgLgKgGgNIgDgKQAAgKAGgGQAHgFAIAAIAJACQAFACAEAFQALAOAPALQAPALAOAAIADAAQAZAAANgMQANgMAAgOQABgSgKgJQgKgKgQgFIgggIQgTgEgPgHQgQgHgKgPQgLgOABgbQgBgUAKgNQAIgOANgIQAOgJAPgDQAPgEAMAAIADAAIAZADIAUAGIAPAIIAKAHQAHAHAAAKQAAAIgFAGQgGAGgJAAIgLgDIgTgKQgKgGgSAAIgDAAQgVAAgLAJQgMAKgBAMQgBAPALAHQAKAHAPAFIAhAIQARAEARAJQAPAJALAOQAKAQAAAcIAAACQAAATgIAPQgHAOgOAKQgOAKgQAFQgRAFgRAAg");
	this.shape_70.setTransform(729.6,322.725);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAACKQgMAAgOgEQgOgEgMgHQgNgHgKgLQgKgKgHgNIgCgKQAAgKAHgGQAGgFAIAAIAKACQAEACAFAFQAJAOAQALQAQALAOAAIACAAQAZAAANgMQANgMABgOQAAgSgKgJQgKgKgQgFIghgIQgSgEgQgHQgPgHgLgPQgJgOgBgbQABgUAIgNQAKgOANgIQANgJAPgDQAQgEALAAIACAAIAZADIAVAGIAPAIIAJAHQAIAHAAAKQAAAIgGAGQgFAGgIAAIgMgDIgTgKQgKgGgTAAIgCAAQgVAAgMAJQgMAKAAAMQAAAPAKAHQAKAHAQAFIAgAIQARAEAQAJQAQAJALAOQAKAQAAAcIAAACQAAATgIAPQgIAOgNAKQgOAKgQAFQgRAFgRAAg");
	this.shape_71.setTransform(705.8,322.725);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_72.setTransform(682.075,322.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_73.setTransform(658.225,322.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_74.setTransform(634.325,322.725);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AA4CGQgGgEgCgIQgHAIgMAEQgNAEgOAAIgEAAQgRAAgQgFQgQgGgLgLQgMgLgHgQQgHgRAAgXIAAilQAAgKAHgGQAGgFAHAAQAIAAAGAFQAHAFAAALIAACkQAAATANAPQAOAOASAAIAEAAQATAAAOgOQANgPAAgTIAAikQAAgLAHgFQAGgFAIAAQAHAAAHAFQAGAGAAAKIAADpQAAAKgGAGQgHAFgHAAQgHAAgGgEg");
	this.shape_75.setTransform(609.275,322.725);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAACKQgNAAgNgEQgOgEgMgHQgNgHgJgLQgLgKgGgNIgDgKQAAgKAGgGQAHgFAIAAIAKACQAEACAFAFQAJAOAQALQAPALAOAAIADAAQAZAAANgMQANgMAAgOQABgSgKgJQgKgKgQgFIghgIQgRgEgQgHQgQgHgKgPQgKgOAAgbQAAgUAJgNQAIgOANgIQAOgJAPgDQAQgEALAAIADAAIAYADIAVAGIAPAIIAJAHQAIAHAAAKQAAAIgFAGQgGAGgJAAIgLgDIgTgKQgKgGgTAAIgCAAQgVAAgMAJQgLAKgBAMQgBAPALAHQAJAHAQAFIAhAIQARAEAQAJQARAJAKAOQAKAQAAAcIAAACQAAATgIAPQgHAOgOAKQgNAKgRAFQgRAFgRAAg");
	this.shape_76.setTransform(584.95,322.725);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAACKQgNAAgNgEQgOgEgMgHQgNgHgJgLQgLgKgGgNIgDgKQAAgKAGgGQAHgFAIAAIAKACQAEACAFAFQAJAOAQALQAPALAPAAIACAAQAZAAANgMQANgMAAgOQABgSgKgJQgKgKgQgFIghgIQgRgEgQgHQgQgHgKgPQgKgOAAgbQAAgUAJgNQAIgOANgIQAOgJAPgDQAQgEALAAIADAAIAYADIAVAGIAPAIIAJAHQAIAHAAAKQAAAIgFAGQgGAGgIAAIgMgDIgTgKQgKgGgTAAIgCAAQgVAAgMAJQgLAKgBAMQAAAPAKAHQAJAHAQAFIAhAIQARAEAQAJQARAJAKAOQAKAQAAAcIAAACQAAATgIAPQgHAOgOAKQgNAKgRAFQgRAFgRAAg");
	this.shape_77.setTransform(542.65,322.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AA3CFQgHgFAAgLIAAikQAAgTgNgPQgOgOgTAAIgEAAQgSAAgOAOQgNAOAAAUIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAHAAAGAEQAGAEABAJQAIgIAMgFQAMgEAOAAIAEAAQARAAAQAFQAPAGAMALQAMALAHARQAHARAAAXIAACkQAAALgGAFQgHAFgHAAQgIAAgGgFg");
	this.shape_78.setTransform(518.425,322.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("ABRCJQgOgCgJgFQgIgGgFgIQgYAWghAAIgFAAQgQAAgQgFQgPgFgMgKQgMgKgIgPQgHgPgBgUIAAgHQAAgWAKgOQAJgOAOgIQAOgJAQgEIAggHIAagFQALgDADgFIACgEIAAgFQAAgZgNgKQgNgLgQAAIgFAAQgQAAgKAIQgJAGgHAPQgEAGgEACIgLADQgIAAgGgGQgGgFAAgJIACgKQAGgPAKgKQAJgKALgGQALgGALgCIAVgDIAFAAQAQAAAQAHQAQAGAKAMQAMAMAGAQQAHAPgBASIAACBQABAQAOADQAIABAFAGQAEAGAAAHQgBAIgEAHQgFAGgKAAIgEgBgAABAKIgeAHQgPAFgJAHQgJAIAAAPIAAAEQAAASAMALQANALAUAAIAFAAQARAAAOgOQAOgOAAgUIAAgsg");
	this.shape_79.setTransform(493.15,322.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_80.setTransform(468.525,322.725);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAACKQgMAAgOgEQgOgEgMgHQgNgHgJgLQgLgKgGgNIgDgKQAAgKAGgGQAHgFAIAAIAKACQAFACAEAFQAKAOAPALQAPALAOAAIADAAQAZAAANgMQANgMAAgOQABgSgKgJQgKgKgQgFIghgIQgRgEgQgHQgQgHgKgPQgKgOAAgbQAAgUAJgNQAIgOANgIQAOgJAPgDQAPgEAMAAIADAAIAYADIAVAGIAPAIIAJAHQAIAHAAAKQAAAIgFAGQgGAGgJAAIgLgDIgTgKQgKgGgSAAIgDAAQgVAAgLAJQgMAKgBAMQAAAPAKAHQAJAHAQAFIAhAIQARAEARAJQAPAJALAOQAKAQAAAcIAAACQAAATgIAPQgHAOgOAKQgNAKgRAFQgQAFgSAAg");
	this.shape_81.setTransform(444.2,322.725);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_82.setTransform(405.275,316.875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgNDAQgHgGABgKIAAjpQgBgLAHgFQAGgFAHAAQAIAAAGAFQAGAFAAALIAADpQAAAKgGAGQgGAEgIAAQgHAAgGgEgAgNiSQgHgFABgLIAAgMQgBgLAHgFQAGgFAHAAQAIAAAGAFQAGAFAAALIAAAMQAAALgGAFQgGAFgIAAQgHAAgGgFg");
	this.shape_83.setTransform(390.1,316.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AA3CFQgHgFAAgLIAAikQAAgTgNgPQgOgOgTAAIgEAAQgSAAgOAOQgNAOAAAUIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAHAAAGAEQAGAEABAJQAIgIAMgFQAMgEAOAAIAEAAQARAAAQAFQAPAGAMALQAMALAHARQAHARAAAXIAACkQAAALgGAFQgHAFgHAAQgIAAgGgFg");
	this.shape_84.setTransform(352.725,322.725);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_85.setTransform(328.025,322.725);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AA3DAQgGgGAAgKIAAilQAAgMgFgJQgDgJgIgGQgGgFgJgDIgSgDIgQADQgJADgHAFQgHAGgEAIQgEAJAAAKIAACoQAAAKgHAGQgGAEgHAAQgIAAgHgEQgGgGAAgKIAAleQAAgLAGgFQAHgFAIAAQAHAAAGAFQAHAFAAALIAABwQAHgIANgEQANgEANAAIAEAAQASAAAPAGQAQAIAMAMQALAMAIARQAGAQAAASIAAClQAAAKgGAGQgHAEgHAAQgIAAgGgEg");
	this.shape_86.setTransform(303.65,316.875);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("ABUDEQgIAAgFgEQgGgGgBgFIhAkeIg/EeQgBAGgFAFQgFAEgJAAIgKAAQgIAAgFgEQgGgGgBgGIhHleQgCgKAFgIQAGgHALAAQAGAAAGADQAFAEACAJIA6EZIA/kaQACgHAFgEQAFgEAJAAIAHAAQAJAAAFAEQAFAEACAHIA/EaIA6kZQABgJAGgEQAGgDAGAAQALAAAGAHQAFAIgCAKIhHFeQgBAGgFAGQgFAEgJAAg");
	this.shape_87.setTransform(269.275,316.875);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgNAWQgHgFABgLIAAgLQgBgKAHgGQAHgFAGAAQAIAAAGAFQAHAGgBAKIAAALQABALgHAFQgGAFgIAAQgGAAgHgFg");
	this.shape_88.setTransform(1512.05,267.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("ABRCJQgNgCgKgFQgIgGgFgIQgZAWggAAIgFAAQgQAAgQgFQgPgFgMgKQgMgKgHgPQgJgPAAgUIAAgHQAAgWAKgOQAJgOAOgIQAOgJAQgEIAggHIAZgFQAMgDADgFIACgEIAAgFQAAgZgNgKQgNgLgRAAIgEAAQgQAAgKAIQgJAGgIAPQgDAGgFACIgKADQgIAAgFgGQgHgFAAgJIACgKQAHgPAJgKQAJgKALgGQAKgGAMgCIAVgDIAEAAQARAAAQAHQAPAGALAMQAMAMAGAQQAHAPAAASIAACBQAAAQANADQAKABAEAGQAEAGgBAHQAAAIgEAHQgGAGgJAAIgEgBgAABAKIgfAHQgNAFgKAHQgKAIABAPIAAAEQgBASANALQANALAUAAIAFAAQARAAAOgOQAOgOAAgUIAAgsg");
	this.shape_89.setTransform(1495,256.425);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("Ag+CFQgGgGAAgLIAAjoQAAgKAGgFQAIgGAHAAIAKADQAFACADAGIAJgFIALgEIARgCQAQAAAPAGQAPAHAKAOQAFAIAAAHQAAAJgGAFQgGAGgIAAQgJAAgIgIIgIgHQgGgFgLAAQgKAAgIAEQgHADgDAGIgFAMIgCANIAACtQAAALgGAGQgGAFgHAAQgIAAgHgFg");
	this.shape_90.setTransform(1474,256.425);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_91.setTransform(1451.575,256.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AB7CFQgGgFAAgLIAAikQAAgYgNgMQgMgMgVAAIgFAAQgTAAgNAOQgOAOAAAVIAACiQAAALgGAGQgHAFgHAAQgHAAgGgFQgGgGAAgLIAAiiQAAgVgOgOQgNgOgTAAIgFAAQgSAAgPAMQgNAMAAAUIAACoQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAGAAAGAEQAGAEACAJQAHgIAMgFQANgEAOAAIAFAAQAUAAARAJQARAIALAPQAMgPARgIQARgJAUAAIAFAAQARAAAQAFQAQAGAMAKQAMALAGASQAIARAAAXIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFg");
	this.shape_92.setTransform(1420.025,256.425);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("ABRCJQgNgCgKgFQgIgGgFgIQgYAWghAAIgFAAQgQAAgPgFQgQgFgMgKQgMgKgIgPQgIgPAAgUIAAgHQAAgWAKgOQAJgOAOgIQAOgJAQgEIAggHIAagFQALgDAEgFIABgEIAAgFQAAgZgNgKQgNgLgQAAIgFAAQgQAAgJAIQgKAGgHAPQgEAGgEACIgLADQgHAAgHgGQgGgFAAgJIACgKQAHgPAJgKQAKgKAKgGQALgGALgCIAVgDIAFAAQAQAAAQAHQAPAGAMAMQALAMAGAQQAHAPgBASIAACBQABAQAOADQAIABAFAGQAEAGAAAHQgBAIgFAHQgEAGgKAAIgEgBgAABAKIgeAHQgOAFgKAHQgJAIAAAPIAAAEQgBASANALQAMALAVAAIAFAAQARAAAOgOQAOgOAAgUIAAgsg");
	this.shape_93.setTransform(1387.85,256.425);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_94.setTransform(1363.225,256.425);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_95.setTransform(1320.625,256.425);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AA3DAQgHgGABgKIAAilQgBgMgEgJQgEgJgHgGQgHgFgIgDIgSgDIgQADQgJADgHAFQgGAGgFAIQgEAJAAAKIAACoQAAAKgHAGQgGAEgHAAQgIAAgHgEQgGgGAAgKIAAleQAAgLAGgFQAHgFAIAAQAHAAAGAFQAHAFAAALIAABwQAHgIANgEQANgEANAAIAEAAQARAAAQAGQAQAIAMAMQAMAMAGARQAHAQAAASIAAClQAAAKgHAGQgGAEgHAAQgIAAgGgEg");
	this.shape_96.setTransform(1296.25,250.575);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_97.setTransform(1273.925,250.575);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_98.setTransform(1234.575,256.425);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_99.setTransform(1213.675,250.575);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_100.setTransform(1174.825,256.425);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AAACKQgNAAgNgEQgOgEgMgHQgMgHgKgLQgLgKgHgNIgCgKQAAgKAGgGQAHgFAIAAIAJACQAGACADAFQAKAOAQALQAPALAOAAIADAAQAZAAANgMQANgMAAgOQABgSgKgJQgKgKgQgFIgggIQgTgEgQgHQgPgHgLgPQgKgOAAgbQAAgUAKgNQAIgOANgIQANgJAQgDQAPgEAMAAIACAAIAaADIAUAGIAPAIIAKAHQAHAHAAAKQAAAIgGAGQgFAGgJAAIgLgDIgTgKQgKgGgSAAIgCAAQgWAAgLAJQgNAKAAAMQgBAPALAHQAKAHAPAFIAhAIQASAEAQAJQAPAJALAOQAKAQAAAcIAAACQAAATgIAPQgIAOgNAKQgOAKgQAFQgQAFgRAAg");
	this.shape_101.setTransform(1150.55,256.425);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_102.setTransform(1126.375,256.425);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgBC/QgNgGgKgKQgKgKgFgNQgFgOAAgPIAAkpQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAAEpQAAANAHAJQAJAJAMAAQALAAAFAHQAEAHAAAHQAAAJgEAGQgFAGgLAAQgPAAgLgFg");
	this.shape_103.setTransform(1107.475,250.575);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_104.setTransform(1086.825,256.425);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AhSC/QgGgFAAgLIAAleQAAgLAGgFQAHgFAHAAQAIAAAFAEQAHAEAAAJQAGgGAMgGQANgFAPAAIAEAAQASAAAPAHQARAHAMAMQALANAHAQQAHARAAASIAABhQAAARgGARQgIAQgLAMQgMAMgPAHQgRAHgSAAIgDAAQgOAAgMgEQgNgEgHgIIAABwQAAALgHAFQgGAGgIAAQgHAAgHgGgAghiOQgOAMAAAVIAABnQAAATAOAMQANAMASAAIAEAAQAUAAANgOQANgPAAgSIAAhgQAAgUgNgOQgNgOgUAAIgEAAQgSAAgNAMg");
	this.shape_105.setTransform(1043.65,262.325);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AA4CGQgGgEgCgIQgHAIgMAEQgNAEgOAAIgEAAQgRAAgQgFQgQgGgLgLQgMgLgHgQQgHgRAAgXIAAilQAAgKAHgGQAGgFAHAAQAIAAAGAFQAHAFAAALIAACkQAAATANAPQAOAOASAAIAEAAQATAAAOgOQANgPAAgTIAAikQAAgLAHgFQAGgFAIAAQAHAAAHAFQAGAGAAAKIAADpQAAAKgGAGQgHAFgHAAQgHAAgGgEg");
	this.shape_106.setTransform(1017.325,256.425);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_107.setTransform(977.825,250.575);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_108.setTransform(957.425,256.425);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AA9DCQgFgCgDgGIhCh7IgkApIAABIQAAAKgGAGQgHAEgIAAQgHAAgGgEQgHgGAAgKIAAleQAAgLAHgFQAGgFAHAAQAIAAAHAFQAGAFAAALIAADXIBlhwQAGgHAIAAQAJAAAGAGQAGAHAAAIQAAAJgGAGIhCBJIBJCGIADALQAAAIgGAGQgGAGgJAAg");
	this.shape_109.setTransform(934.25,250.575);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_110.setTransform(908.775,256.425);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgNDAQgGgGgBgKIAAjpQABgLAGgFQAHgFAGAAQAHAAAHAFQAHAFAAALIAADpQAAAKgHAGQgHAEgHAAQgGAAgHgEgAgNiSQgGgFgBgLIAAgMQABgLAGgFQAHgFAGAAQAHAAAHAFQAHAFAAALIAAAMQAAALgHAFQgHAFgHAAQgGAAgHgFg");
	this.shape_111.setTransform(889.9,250.575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_112.setTransform(874.725,250.575);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("Ag9CFQgHgGAAgLIAAjoQAAgKAHgFQAGgGAIAAIAKADQAFACACAGIAKgFIALgEIARgCQAQAAAPAGQAPAHAKAOQAFAIAAAHQAAAJgGAFQgGAGgIAAQgJAAgIgIIgJgHQgFgFgLAAQgKAAgIAEQgGADgEAGIgFAMIgCANIAACtQABALgHAGQgGAFgIAAQgHAAgGgFg");
	this.shape_113.setTransform(839.7,256.425);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AA4CGQgGgEgCgIQgHAIgMAEQgNAEgOAAIgEAAQgRAAgQgFQgQgGgLgLQgMgLgHgQQgHgRAAgXIAAilQAAgKAHgGQAGgFAHAAQAIAAAGAFQAHAFAAALIAACkQAAATANAPQAOAOASAAIAEAAQATAAAOgOQANgPAAgTIAAikQAAgLAHgFQAGgFAIAAQAHAAAHAFQAGAGAAAKIAADpQAAAKgGAGQgHAFgHAAQgHAAgGgEg");
	this.shape_114.setTransform(816.425,256.425);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_115.setTransform(791.725,256.425);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AhVC/QgGgHAAgJQAAgHAEgHQAEgGAKgBQALgBAJgLQAKgKAIgaIASg9IhHjVIgBgDIAAgEQAAgJAGgGQAGgGAJAAQANAAAGAPIA0CfIAxifQACgIAFgEQAGgDAFAAQAJAAAHAGQAGAGAAAJIgBADIAAAEIhZEfQgIAegQAVQgRAVgdAFIgDABQgJAAgFgGg");
	this.shape_116.setTransform(768.375,262.325);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AA3CFQgHgFAAgLIAAikQAAgTgNgPQgOgOgTAAIgEAAQgSAAgOAOQgNAOAAAUIAACkQAAALgHAFQgGAFgIAAQgHAAgHgFQgGgFAAgLIAAjpQAAgKAGgFQAHgGAIAAQAHAAAGAEQAGAEABAJQAIgIAMgFQAMgEAOAAIAEAAQARAAAQAFQAPAGAMALQAMALAHARQAHARAAAXIAACkQAAALgGAFQgHAFgHAAQgIAAgGgFg");
	this.shape_117.setTransform(726.525,256.425);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_118.setTransform(701.325,256.425);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_119.setTransform(658.775,256.425);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AA4DBQgGgEgBgJQgGAGgMAGQgLAEgRAAIgEAAQgSAAgQgGQgQgHgMgMQgMgNgGgQQgHgQAAgTIAAhgQAAgSAHgQQAGgRAMgMQAMgMAQgIQAQgGASAAIADAAQANAAANAEQANAFAHAJIAAhyQAAgLAHgFQAGgFAIAAQAHAAAGAFQAHAFAAALIAAFfQAAAKgHAFQgGAEgHAAQgHAAgGgDgAgigWQgNAOAAATIAABgQAAATANAOQAOAOASAAIAFAAQASAAANgMQAOgLAAgVIAAhoQAAgTgOgLQgNgMgSAAIgEAAQgTAAgOAOg");
	this.shape_120.setTransform(632.725,250.575);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_121.setTransform(608.125,256.425);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgTAHgQQAHgRALgMQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQALANAHAQQAHARAAASQAAALgHAFQgGAFgHAAQgIAAgGgFQgGgFgBgKQgBgWgNgNQgNgOgSAAIgFAAQgSAAgOAOQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAANgPQANgOABgTQABgLAGgGQAGgFAIAAQAHAAAGAFQAHAGAAALQAAATgHAQQgGAQgMANQgMAMgQAHQgQAHgRAAg");
	this.shape_122.setTransform(584.275,256.425);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("Ag+CFQgGgGAAgLIAAjoQAAgKAGgFQAIgGAHAAIAKADQAFACADAGIAJgFIALgEIARgCQAQAAAPAGQAPAHAKAOQAFAIAAAHQAAAJgGAFQgGAGgIAAQgKAAgHgIIgIgHQgGgFgKAAQgLAAgHAEQgIADgDAGIgFAMIgCANIAACtQAAALgGAGQgGAFgHAAQgIAAgHgFg");
	this.shape_123.setTransform(564,256.425);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("ABRCJQgNgCgKgFQgIgGgFgIQgZAWggAAIgFAAQgQAAgQgFQgPgFgMgKQgMgKgHgPQgJgPAAgUIAAgHQAAgWAKgOQAJgOAOgIQAOgJAQgEIAggHIAZgFQAMgDADgFIACgEIAAgFQAAgZgNgKQgNgLgRAAIgEAAQgQAAgKAIQgJAGgIAPQgDAGgFACIgKADQgIAAgFgGQgHgFAAgJIACgKQAHgPAJgKQAJgKALgGQAKgGAMgCIAVgDIAEAAQARAAAQAHQAPAGALAMQAMAMAGAQQAHAPAAASIAACBQgBAQAOADQAKABAEAGQAEAGgBAHQAAAIgEAHQgGAGgJAAIgEgBgAABAKIgfAHQgNAFgKAHQgKAIABAPIAAAEQgBASANALQANALAUAAIAFAAQARAAAOgOQAOgOAAgUIAAgsg");
	this.shape_124.setTransform(541,256.425);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgBDEQgSAAgMgEQgLgGgGgGQgBAJgFAEQgHADgHAAQgHAAgGgEQgHgFAAgKIAAlfQAAgLAHgFQAGgFAHAAQAIAAAHAFQAGAFAAALIAAByQAHgJANgFQANgEAOAAIACAAQATAAAQAGQAPAIAMAMQALAMAHARQAHAQAAASIAABgQAAATgHAQQgHAQgLANQgNAMgPAHQgQAGgSAAgAgigYQgNALAAATIAABoQAAAVANALQAOAMATAAIADAAQATAAAOgOQANgOAAgTIAAhgQAAgTgNgOQgOgOgTAAIgDAAQgTAAgOAMg");
	this.shape_125.setTransform(515.55,250.575);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAGAMANQAMAMAGARQAHAQAAAUIAAAuQAAAHgGAHQgGAGgIAAIh0AAIAAAcQAAAUANAOQAOAOASAAIAFAAQAPAAALgJQAKgIAFgMQADgHAFgDIAKgEQAIAAAHAHQAGAGAAAJIgCAKQgKAXgUAPQgVAPgbAAgAgihRQgNAOAAAVIAAAcIBfAAIAAgcQAAgVgOgOQgNgOgSAAIgEAAQgTAAgOAOg");
	this.shape_126.setTransform(471.625,256.425);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AA3DAQgHgGAAgKIAAilQAAgMgDgJQgEgJgHgGQgIgFgIgDIgSgDIgQADQgJADgHAFQgHAGgEAIQgEAJAAAKIAACoQAAAKgGAGQgHAEgIAAQgHAAgGgEQgHgGAAgKIAAleQAAgLAHgFQAGgFAHAAQAIAAAHAFQAGAFAAALIAABwQAHgIANgEQANgEAOAAIADAAQASAAAPAGQAQAIAMAMQALAMAHARQAHAQAAASIAAClQAAAKgHAGQgGAEgHAAQgIAAgGgEg");
	this.shape_127.setTransform(447.25,250.575);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AARC/QgNgGgIgKQgKgKgFgNQgGgOAAgPIAAidIgSAAQgLAAgFgHQgFgHAAgHQAAgIAFgHQAFgHALAAIASAAIAAhhQAAgLAHgFQAGgFAIAAQAGAAAGAFQAHAFAAALIAABhIAdAAQAKAAAFAHQAFAHAAAIQAAAHgFAHQgFAHgKAAIgdAAIAACcQAAAPAJAIQAKAIAMABQAKABAEAGQAFAHAAAHQAAAJgFAGQgFAGgKAAQgPAAgNgFg");
	this.shape_128.setTransform(424.975,250.575);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AA4DBQgGgEgBgJQgGAGgMAGQgLAEgRAAIgEAAQgSAAgQgGQgQgHgMgMQgMgNgGgQQgHgQAAgTIAAhgQAAgSAHgQQAGgRAMgMQAMgMAQgIQAQgGASAAIADAAQANAAANAEQANAFAHAJIAAhyQAAgLAHgFQAGgFAIAAQAHAAAGAFQAHAFAAALIAAFfQAAAKgHAFQgGAEgHAAQgHAAgGgDgAgigWQgNAOAAATIAABgQAAATANAOQAOAOASAAIAFAAQASAAANgMQAOgLAAgVIAAhoQAAgTgOgLQgNgMgSAAIgEAAQgTAAgOAOg");
	this.shape_129.setTransform(384.175,250.575);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgBC/QgNgGgKgKQgKgKgFgNQgFgOAAgPIAAkpQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAAEpQAAANAHAJQAJAJAMAAQALAAAFAHQAEAHAAAHQAAAJgEAGQgFAGgLAAQgPAAgLgFg");
	this.shape_130.setTransform(365.225,250.575);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgCCKQgRAAgQgHQgQgHgMgMQgMgMgGgQQgHgRAAgSIAAhgQAAgSAHgRQAGgQAMgNQAMgMAQgHQAQgHARAAIAFAAQARAAAQAHQAQAHAMAMQAMANAGAQQAHARAAASIAABgQAAASgHARQgGAQgMAMQgMAMgQAHQgQAHgRAAgAgihRQgNAOAAAUIAABfQAAATANAPQAOAOATAAIAEAAQASAAAOgOQANgPAAgTIAAhfQAAgUgNgOQgOgOgSAAIgFAAQgSAAgOAOg");
	this.shape_131.setTransform(343.875,256.425);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("ABGDAQgGgFAAgLIAAihIh+AAIAAChQAAAKgHAGQgGAEgIAAQgHAAgHgEQgGgGAAgKIAAleQAAgLAGgFQAHgFAHAAQAIAAAGAFQAHAFAAALIAACUIB+AAIAAiUQAAgLAGgFQAHgFAHAAQAIAAAGAFQAGAFAAALIAAFeQAAALgGAFQgGAEgIAAQgHAAgHgEg");
	this.shape_132.setTransform(316.375,250.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},6).wait(85));

	// i-num
	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AA2CMQgLAAgFgFQgFgGgEgIIg/iVIAACSQAAALgIAGQgHAFgJAAQgIAAgIgFQgHgGAAgLIAAjqQAAgKAHgHQAHgGAJAAIAGAAQALAAAFAFQAFAGAEAIIA+CPIAAiMQAAgLAIgGQAHgFAJAAQAIAAAIAFQAHAGAAALIAADrQAAAJgHAGQgHAHgJAAg");
	this.shape_133.setTransform(937.675,104.575);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AA/CJQgGgEgCgJIgPgwIhPAAIgOAwQgDAJgGAEQgGADgHAAQgJAAgIgFQgHgGAAgLIAAgEIABgDIBJjnQAFgOAHgDQAGgCAHAAQAIAAAGACQAHADAFAOIBIDnIACAHQAAALgIAGQgHAFgJAAQgHAAgGgDgAAZAeIgZhUIgYBUIAxAAg");
	this.shape_134.setTransform(916.175,104.575);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AAACMQgRAAgOgFQgPgGgLgLQgLgLgGgOQgHgOAAgRIAAh8QAAgQAHgPQAGgOALgKQALgLAPgGQAOgFARAAIACAAQAPAAAOAEQAOAGAKAIQALAJAHAMQAHAMACAPIAAAEQAAALgIAGQgHAGgJAAQgIAAgGgFQgGgFgCgKQgCgNgKgHQgJgIgNAAIgCAAQgOAAgKAJQgKAJAAAOIAAB8QAAAOAKAJQAKAJAOAAIACAAQANAAAJgHQAKgIACgMQACgKAGgFQAHgFAHAAQAJAAAIAGQAHAGAAALIAAAEQgCAOgHANQgHAMgLAJQgLAJgNAEQgOAFgPAAg");
	this.shape_135.setTransform(896.025,104.575);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgCCMQgPAAgPgFQgPgGgLgKQgLgKgHgPQgGgPAAgTQAAgLAHgGQAHgGAJAAQAJAAAHAGQAHAGAAALQAAARAKAJQAJAIAPAAIADAAQAPAAAKgHQAKgIAAgPQAAgMgIgKQgJgJgNgIIgbgQQgPgIgNgJQgNgLgIgMQgJgOAAgSIAAgIQAAgRAHgMQAHgNAMgIQALgJAOgFQAOgEANAAIACAAQAQAAAOAEQAOAFALAIQALAJAGALQAHAMAAAOQAAAMgIAFQgHAGgJAAQgJAAgHgFQgHgFAAgLQAAgIgJgGQgIgGgPAAIgDAAQgNAAgJAHQgJAHAAALIAAAGQAAAIAJAHIAWAOIAbAQQAOAJAOALQANALAIAPQAJAQAAAUQAAARgGAOQgHAPgLAKQgLAJgOAGQgPAFgSAAg");
	this.shape_136.setTransform(876.025,104.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},6).wait(85));

	// i-step
	this.instance_1 = new lib.s1circledark();
	this.instance_1.setTransform(907.4,103,0.2,0.2,0,0,0,0,35);

	this.iStep = new lib.s1circledark();
	this.iStep.name = "iStep";
	this.iStep.setTransform(907.4,103,2,2,0,0,0,0,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.iStep}]},2).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:2.2,scaleY:2.2},4).to({_off:true,scaleX:2,scaleY:2},2).wait(85));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1203.4,471.6,371.29999999999995,402.29999999999995);
// library properties:
lib.properties = {
	id: 'D7D5DE1740A04999B0AB56BA8A4B3927',
	width: 1920,
	height: 900,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D7D5DE1740A04999B0AB56BA8A4B3927'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;