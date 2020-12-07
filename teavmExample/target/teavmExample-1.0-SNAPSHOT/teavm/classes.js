"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.cN=f;}
function $rt_cls(cls){return Dy(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Ey(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.i.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return B; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(EH());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return EI(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var G=$rt_throw;var EJ=$rt_compare;var EK=$rt_nullCheck;var I=$rt_cls;var Bu=$rt_createArray;var D8=$rt_isInstance;var EL=$rt_nativeThread;var EM=$rt_suspending;var EN=$rt_resuming;var EO=$rt_invalidPointer;var C=$rt_s;var BH=$rt_eraseClinit;var EP=$rt_imul;var Ec=$rt_wrapException;
function B(){this.$id$=0;}
function Bs(a){return Dy(a.constructor);}
function D1(a){var b,c,d,e,f,g,h,i,j,k;b=new B4;b.f=$rt_createCharArray(16);b=BB(BB(b,Do(Bs(a))),C(0));c=CY(a);if(!c)d=C(1);else{if(!c)e=32;else{f=0;e=c>>>16;if(e)f=16;else e=c;g=e>>>8;if(!g)g=e;else f=f|8;e=g>>>4;if(!e)e=g;else f=f|4;g=e>>>2;if(!g)g=e;else f=f|2;if(g>>>1)f=f|1;e=(32-f|0)-1|0;}e=(((32-e|0)+4|0)-1|0)/4|0;h=$rt_createCharArray(e);i=h.data;g=(e-1|0)*4|0;j=0;while(g>=0){k=j+1|0;f=c>>>g&15;i[j]=f>=16?0:f<10?(48+f|0)&65535:((97+f|0)-10|0)&65535;g=g-4|0;j=k;}d=Ey(h);}return C4(BB(b,d));}
function CY(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function Ci(){}
function Bw(){B.call(this);}
function CW(a,b){var c,d,$$je;c=DK(Bs(a),a);b=CI(b);d=new BP;c=De(c);Bq(d,b);d.Y=c;J(b,c.m);O(EQ,d);ER=1;a:{try{CJ(d);break a;}catch($$e){$$je=Ec($$e);b=$$je;}ER=0;G(b);}ER=0;}
function C7(a,b){CW(a,window.document.getElementById($rt_ustr(b)));}
function CA(){Bw.call(this);this.q=null;}
function Ez(b){var c;Dz();C2();Dn();CP();c=new CA;c.q=C(2);C7(c,C(3));console.log("Jakob");}
function Ef(a){return a.q;}
function Eo(a,b){a.q=b;}
function Ck(){}
function Cp(){var a=this;B.call(a);a.J=null;a.w=null;}
function Dy(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Cp;c.w=b;d=c;b.classObject=d;}return c;}
function DO(a){return a.w;}
function Do(a){if(a.J===null)a.J=$rt_str(a.w.$meta.name);return a.J;}
function CZ(a){return Dy(a.w.$meta.item);}
function Dr(){B.call(this);}
function DX(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function BO(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function C6(){B.call(this);}
function V(){}
function Bg(){}
function Bx(){}
function Bn(){var a=this;B.call(a);a.i=null;a.z=0;}
var ES=null;function Ey(a){var b=new Bn();Dc(b,a);return b;}
function Dc(a,b){var c,d;b=b.data;c=b.length;a.i=$rt_createCharArray(c);d=0;while(d<c){a.i.data[d]=b[d];d=d+1|0;}}
function BN(a,b){var c;if(b>=0&&b<a.i.data.length)return a.i.data[b];c=new BC;H(c);G(c);}
function M(a){return a.i.data.length;}
function C$(a){return a.i.data.length?0:1;}
function D0(a){return a;}
function CE(b){return b===null?C(4):b;}
function DI(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bn))return 0;c=b;if(M(c)!=M(a))return 0;d=0;while(d<M(c)){if(BN(a,d)!=BN(c,d))return 0;d=d+1|0;}return 1;}
function Ep(a){var b,c,d,e;a:{if(!a.z){b=a.i.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.z=(31*a.z|0)+e|0;d=d+1|0;}}}return a.z;}
function Dz(){ES=new CN;}
function U(){var a=this;B.call(a);a.bB=null;a.X=0;a.bj=0;}
function ET(a){var b=new U();Q(b,a);return b;}
function Q(a,b){a.X=1;a.bj=1;a.bB=b;}
function D3(a){return a;}
function Bz(){U.call(this);}
function Y(){Bz.call(this);}
function CT(){Y.call(this);}
function BL(){var a=this;B.call(a);a.f=null;a.n=0;}
function CM(){}
function B4(){BL.call(this);}
function BB(a,b){Cs(a,a.n,b);return a;}
function Cs(a,b,c){var d,e,f;if(b>=0&&b<=a.n){a:{if(c===null)c=C(4);else if(C$(c))break a;Dw(a,a.n+M(c)|0);d=a.n-1|0;while(d>=b){a.f.data[d+M(c)|0]=a.f.data[d];d=d+(-1)|0;}a.n=a.n+M(c)|0;d=0;while(d<M(c)){e=a.f.data;f=b+1|0;e[b]=BN(c,d);d=d+1|0;b=f;}}return a;}c=new BC;H(c);G(c);}
function C4(a){var b,c,d,e,f;b=new Bn;c=a.f;d=a.n;b.i=$rt_createCharArray(d);e=0;while(e<d){f=c.data;b.i.data[e]=f[e+0|0];e=e+1|0;}return b;}
function Dw(a,b){var c,d,e,f;if(a.f.data.length<b){b=a.f.data.length>=1073741823?2147483647:Bf(b,Bf(a.f.data.length*2|0,5));c=a.f.data;d=$rt_createCharArray(b);e=d.data;b=Dj(b,c.length);f=0;while(f<b){e[f]=c[f];f=f+1|0;}a.f=d;}}
function Eq(a,b,c){return Cs(a,b,c);}
function BG(){B.call(this);}
function B7(){BG.call(this);}
var EU=null;function C2(){EU=I($rt_intcls());}
function X(){Y.call(this);}
function EV(a){var b=new X();Cx(b,a);return b;}
function Cx(a,b){Q(a,b);}
function DF(){X.call(this);}
function EW(a){var b=new DF();D5(b,a);return b;}
function D5(a,b){Cx(a,b);}
function Dp(){X.call(this);}
function EX(a){var b=new Dp();Ed(b,a);return b;}
function Ed(a,b){Cx(a,b);}
function T(){U.call(this);}
function F(){T.call(this);}
function EY(){var a=new F();H(a);return a;}
function EI(a){var b=new F();DS(b,a);return b;}
function H(a){a.X=1;a.bj=1;}
function DS(a,b){Q(a,b);}
function DE(){B.call(this);}
function B_(){}
function CN(){B.call(this);}
function Bi(){B.call(this);}
var EZ=null;var E0=null;function Dn(){EZ=I($rt_charcls());E0=Bu(Bi,128);}
function Bj(){F.call(this);}
function BC(){Bj.call(this);}
function P(){}
function BT(){}
function BW(){}
function K(){}
function C_(){}
function CG(){}
function B8(){}
function B0(){}
function Cu(){}
function Cm(){}
function Cb(){}
function BF(){}
function Ds(){B.call(this);}
function DR(a,b,c){a.cn($rt_str(b),BO(c,"handleEvent"));}
function DV(a,b,c){a.ca($rt_str(b),BO(c,"handleEvent"));}
function Es(a,b){return a.bA(b);}
function Eu(a,b,c,d){a.cC($rt_str(b),BO(c,"handleEvent"),d?1:0);}
function DP(a,b){return !!a.cy(b);}
function D_(a){return a.bx();}
function DW(a,b,c,d){a.cD($rt_str(b),BO(c,"handleEvent"),d?1:0);}
function BK(){B.call(this);}
var ER=0;var EQ=null;function CP(){EQ=DL();}
function S(){var a=this;B.call(a);a.g=null;a.d=null;a.c=null;}
function Ek(a){return a.g;}
function Ei(a){return a.c;}
function CV(a){var b,c;if(a.g===null)return;CS(a);b=a.d;if(b!==null)b=b.d;else a.g.r=a.c;c=a.c;if(c!==null)c=c.c;else a.g.d=a.d;if(b!==null)b.c=c;if(c!==null)c.d=b;a.c=c;a.d=b;a.g=null;}
function C5(a){while(a.g!==null){a=a.g;}return !(a instanceof By)?null:a;}
function Bc(){var a=this;S.call(a);a.r=null;a.v=null;}
function J(a,b){C8(a,b,null);}
function C8(a,b,c){var d,e,f,g,h;if(b.g!==null){b=new Bk;Q(b,C(5));G(b);}if(c!==null&&c.by()!==a){b=new Bk;Q(b,C(6));G(b);}b.g=a;if(c===null){b.d=a.v;if(a.v===null)a.r=b;else a.v.c=b;a.v=b;}else{b.c=c;b.d=c.d;if(b.c===null)a.v=b;else b.c.d=b;if(b.d===null)a.r=b;else b.d.c=b;}d=C5(a);if(d===null)return;e=new Array();b.M(e);if(!e.length)return;a:{if(c!==null)f=c.C();else{f=null;while(a!==null){if(a.c!==null){f=a.c.C();break a;}a=a.g;}}}g=0;while(g<e.length){c=d.bf;h=e[g];c.insertBefore(h,f);g=g+1|0;}}
function Ew(a){var b,c;b=a.r;while(true){if(b===null)return null;c=b.C();if(c!==null)break;b=b.c;}return c;}
function DZ(a,b){var c;c=a.r;while(c!==null){c.M(b);c=c.c;}}
function C3(){return new B5;}
function CI(b){var c;c=new By;c.bf=b;return c;}
function Bm(){}
function BQ(){}
function L(){B.call(this);this.m=null;}
function E1(a){var b=new L();Bq(b,a);return b;}
function Bq(a,b){a.m=b;}
function Eh(a){return a.m;}
function BP(){L.call(this);this.Y=null;}
function CJ(a){Dd(a.Y);}
function Cl(){}
function Be(){}
function R(){B.call(this);}
function Bh(){}
function Bt(){R.call(this);this.A=0;}
function BA(a){var b;b=new Cw;b.s=a;b.bo=b.s.A;b.P=b.s.p;b.bb=(-1);return b;}
function Cy(){}
function B2(){}
function CQ(){var a=this;Bt.call(a);a.l=null;a.p=0;}
function DL(){var a=new CQ();Ea(a);return a;}
function EC(a){var b=new CQ();C0(b,a);return b;}
function Ea(a){C0(a,10);}
function C0(a,b){a.l=Bu(B,b);}
function Dl(a,b){var c,d,e,f;if(a.l.data.length<b){c=a.l.data.length>=1073741823?2147483647:Bf(b,Bf(a.l.data.length*2|0,5));d=a.l;e=CZ(Bs(d));if(e===null){e=new Bv;H(e);G(e);}if(e===I($rt_voidcls())){e=new Bk;H(e);G(e);}if(c<0){e=new CL;H(e);G(e);}f=d.data;d=DU(e.w,c);b=Dj(c,f.length);c=0;while(c<b){d.data[c]=f[c];c=c+1|0;}a.l=d;}}
function Dv(a,b){var c;if(b>=0&&b<a.p)return a.l.data[b];c=new Bj;H(c);G(c);}
function DN(a){return a.p;}
function O(a,b){var c,d;Dl(a,a.p+1|0);c=a.l.data;d=a.p;a.p=d+1|0;c[d]=b;a.A=a.A+1|0;return 1;}
function By(){Bc.call(this);this.bf=null;}
function Df(){B.call(this);}
function DK(b,c){b=new Ct;b.bc=c;c=new Cv;c.be=b;return c;}
function Br(){}
function Ct(){B.call(this);this.bc=null;}
function C9(a){var b,c;b=a.bc;c=new Co;c.W=b;b=new B6;c=c;Bq(b,C3());b.U=c;return b;}
function Cv(){B.call(this);this.be=null;}
function De(a){return C9(a.be);}
function CX(){B.call(this);}
function Dj(b,c){if(b<c)c=b;return c;}
function Bf(b,c){if(b>c)c=b;return c;}
function DH(){B.call(this);}
function Bk(){F.call(this);}
function Dh(){B.call(this);}
function Eg(a,b){return a.bA(b);}
function D9(a){return a.bx();}
function Dg(){B.call(this);}
function DU(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Bv(){F.call(this);}
function CL(){F.call(this);}
function BY(){}
function Co(){B.call(this);this.W=null;}
function D2(a){return;}
function CO(a,b){var c,d,e;c=a.W;b=DD(Bo(N(Ba(N(Bo(N(Bo(b,C(7)),C(8)),C(9)),C(10))),C(11)),C(12)),C(13),C(14));d=new CB;d.S=c;b=B9(b,d);d=new CC;d.bl=c;b=C1(N(Bo(N(Ba(N(Ba(B9(b,d)),C(15))),C(16)),C(7)),C(17)),C(18));d=C3();e=new Cg;Bq(e,d);d=e;e=new Cd;e.bi=c;d.K=e;Ba(N(Ba(DA(b,d)),C(15)));}
function B6(){var a=this;L.call(a);a.U=null;a.L=null;}
function Dd(a){var b,c,d;if(a.L===null){b=new BJ;c=a.m;ED();d=new B$;d.b=Bu(B,9);b.e=d;b.x=DL();b.N=c;CO(a.U,b);a.L=b.x;}b=BA(a.L);while(BD(b)){BI(b).u();}}
function B5(){Bc.call(this);}
function BJ(){var a=this;B.call(a);a.N=null;a.e=null;a.x=null;}
var E2=null;function ED(){ED=BH(BJ);Ee();}
function Bo(a,b){return BR(a,b,0);}
function C1(a,b){return BR(a,b,1);}
function BR(a,b,c){var d,e;d=E2.createElement($rt_ustr(b));e=new B3;e.k=d;if(c)e.y=CI(d);CH(a.e,e);return a;}
function Ba(a){BV(a,CF(a.e).k);return a;}
function N(a,b){BV(a,E2.createTextNode($rt_ustr(b)));return a;}
function DD(a,b,c){if(Bd(a.e)){b=new BE;Q(b,C(19));G(b);}W(a.e).k.setAttribute($rt_ustr(b),$rt_ustr(c));return a;}
function DA(a,b){var c;if(Bd(a.e))J(a.N,b.m);else{c=W(a.e);if(c.y!==null)J(c.y,b.m);else J(CI(c.k),b.m);}Dq(b);O(a.x,b);return a;}
function B9(a,b){var c;if(Bd(a.e)){c=new BE;Q(c,C(20));G(c);}c=b.T(W(a.e));O(a.x,c);return a;}
function BV(a,b){var c;if(Bd(a.e))J(a.N,Er(b));else{c=W(a.e);if(c.y!==null)J(c.y,Er(b));else c.k.appendChild(b);}}
function DM(a){return a.x;}
function Ee(){E2=window.document;}
function BZ(){}
function Cn(){}
function B$(){var a=this;R.call(a);a.B=0;a.b=null;a.a=0;a.j=0;}
function CH(a,b){var c,d,e,f,g,h;if(b===null){b=new Bv;H(b);G(b);}c=Dm(a)+1|0;if(c>=a.b.data.length){c=Bf(a.b.data.length*2|0,((c*3|0)/2|0)+1|0);if(c<1)c=2147483647;d=Bu(B,c);e=0;if(a.a<=a.j){f=d.data;c=a.a;while(c<a.j){g=e+1|0;f[e]=a.b.data[c];c=c+1|0;e=g;}}else{f=d.data;h=a.a;while(h<a.b.data.length){c=e+1|0;f[e]=a.b.data[h];h=h+1|0;e=c;}c=0;while(c<a.j){g=e+1|0;f[e]=a.b.data[c];c=c+1|0;e=g;}}a.a=0;a.j=e;a.b=d;}a.a=a.a-1|0;if(a.a<0)a.a=a.a+a.b.data.length|0;a.b.data[a.a]=b;a.B=a.B+1|0;}
function CF(a){var b;b=Dk(a);if(b!==null)return b;b=new CD;H(b);G(b);}
function Dk(a){var b;if(a.a==a.j)return null;b=a.b.data[a.a];a.b.data[a.a]=null;a.a=a.a+1|0;if(a.a>=a.b.data.length)a.a=0;a.B=a.B+1|0;return b;}
function W(a){return Bd(a)?null:a.b.data[a.a];}
function D7(a){return W(a);}
function Em(a,b){CH(a,b);}
function El(a){return CF(a);}
function Dm(a){return a.j>=a.a?a.j-a.a|0:(a.b.data.length-a.a|0)+a.j|0;}
function Bd(a){return a.a!=a.j?0:1;}
function BM(){}
function CB(){B.call(this);this.S=null;}
function DY(a,b){var c,d;c=a.S;b=b;d=new CK;d.R=DC(b);b=d;d=new Ce;d.V=c;b.I=d;return b;}
function CC(){B.call(this);this.bl=null;}
function Ev(a,b){var c,d;c=a.bl;b=b;d=new B1;d.bn=b;b=d;d=new Cr;d.bh=c;b.G=d;return b;}
function Cg(){var a=this;L.call(a);a.K=null;a.t=null;a.bg=null;a.bd=0;}
function Eb(a,b){a.K=b;}
function Dq(a){var b,c,d;b=Du(a.K);if(a.bd&&DJ(a.bg,b))return;a.bd=1;a.bg=b;if(a.t!==null){CV(a.t);a.t=null;}c=new Cc;d=window.document;b=CE(b);Dt(c,d.createTextNode($rt_ustr(b)));a.t=c;J(a.m,a.t);}
function Bp(){}
function Cd(){B.call(this);this.bi=null;}
function Du(a){return a.bi.q;}
function Cz(){}
function Cw(){var a=this;B.call(a);a.F=0;a.bo=0;a.P=0;a.bb=0;a.s=null;}
function BD(a){return a.F>=a.P?0:1;}
function BI(a){var b,c;if(a.bo<a.s.A){b=new Cq;H(b);G(b);}a.bb=a.F;b=a.s;c=a.F;a.F=c+1|0;return Dv(b,c);}
function BX(){}
function B3(){var a=this;B.call(a);a.k=null;a.y=null;a.h=null;a.Q=null;}
function DC(a){return a.k;}
function CU(a,b){var c,d;if(a.h!==null){if(D8(a.h,Bh))O(a.h,b);else{c=EC(2);O(c,a.h);O(c,b);a.h=c;}}else{a.h=b;d=a.k;b=new Cj;b.Z=a;a.Q=b;c=a.Q;d.addEventListener("change",DX(c,"handleEvent"));}}
function Da(a){return $rt_str(a.k.value);}
function Cq(){F.call(this);}
function Cc(){S.call(this);this.D=null;}
function Er(a){var b=new Cc();Dt(b,a);return b;}
function Dt(a,b){a.D=b;}
function Et(a){return a.D;}
function DT(a,b){var c;c=a.D;b.push(c);}
function CS(a){var b;b=a.D;if(b.parentNode!==null)b.parentNode.removeChild(b);}
function BE(){T.call(this);}
function CD(){F.call(this);}
function B1(){var a=this;B.call(a);a.bn=null;a.G=null;a.bm=0;}
function En(a,b){a.G=b;}
function D4(a){if(!a.bm){a.bm=1;CU(a.bn,a.G);}}
function BS(){}
function Cr(){B.call(this);this.bh=null;}
function BU(a,b){var c,d,$$je;c=a.bh;d=Bu(B,1).data;d[0]=b;c.q=d[0];if(!ER){ER=1;a:{try{b=BA(EQ);while(true){if(!BD(b))break a;CJ(BI(b));}}catch($$e){$$je=Ec($$e);b=$$je;}ER=0;G(b);}ER=0;}}
function CK(){var a=this;B.call(a);a.R=null;a.I=null;a.ba=null;}
function DQ(a,b){a.I=b;}
function D6(a){var b,c;b=CR(a.I);if(!DJ(b,a.ba)){a.ba=b;c=a.R;b=$rt_ustr(CE(b));c.value=b;}}
function Ce(){B.call(this);this.V=null;}
function CR(a){return a.V.q;}
function Db(){B.call(this);}
function DJ(b,c){if(b===c)return 1;return b!==null?DI(b,c):c!==null?0:1;}
function Ca(){}
function Cj(){B.call(this);this.Z=null;}
function Di(a,b){var c;b=a.Z;c=Da(b);if(b.h!==null){if(!D8(b.h,Bh))BU(b.h,c);else{b=BA(b.h);while(BD(b)){BU(BI(b),c);}}}}
function Ej(a,b){Di(a,b);}
$rt_packages([-1,"java",0,"lang"]);
$rt_metadata([B,"Object",1,0,[],0,3,0,0,Ci,0,B,[],3,3,0,0,Bw,0,B,[Ci],1,3,0,0,CA,0,Bw,[],0,3,0,0,Ck,0,B,[],3,3,0,0,Cp,0,B,[Ck],0,3,0,0,Dr,0,B,[],4,0,0,0,C6,0,B,[],4,3,0,0,V,0,B,[],3,3,0,0,Bg,0,B,[],3,3,0,0,Bx,0,B,[],3,3,0,0,Bn,0,B,[V,Bg,Bx],0,3,0,0,U,0,B,[],0,3,0,0,Bz,0,U,[],0,3,0,0,Y,0,Bz,[],0,3,0,0,CT,0,Y,[],0,3,0,0,BL,0,B,[V,Bx],0,0,0,0,CM,0,B,[],3,3,0,0,B4,0,BL,[CM],0,3,0,0,BG,0,B,[V],1,3,0,0,B7,0,BG,[Bg],0,3,0,0,X,0,Y,[],0,3,0,0,DF,0,X,[],0,3,0,0,Dp,0,X,[],0,3,0,0,T,0,U,[],0,3,0,0,F,0,T,[],0,3,0,0,DE,0,
B,[],4,3,0,0,B_,0,B,[],3,3,0,0,CN,0,B,[B_],0,3,0,0,Bi,0,B,[Bg],0,3,0,0,Bj,0,F,[],0,3,0,0,BC,0,Bj,[],0,3,0,0,P,0,B,[],3,3,0,0,BT,0,B,[P],3,3,0,0,BW,0,B,[BT],3,3,0,0,K,0,B,[P],3,3,0,0,C_,0,B,[BW,K],3,3,0,0,CG,0,B,[K],3,3,0,0,B8,0,B,[K],3,3,0,0,B0,0,B,[K],3,3,0,0,Cu,0,B,[K],3,3,0,0,Cm,0,B,[K,CG,B8,B0,Cu],3,3,0,0,Cb,0,B,[],3,3,0,0,BF,0,B,[P],3,3,0,0,Ds,0,B,[P,Cm,Cb,BF],1,3,0,["b2",function(b,c){return DR(this,b,c);},"bU",function(b,c){return DV(this,b,c);},"bW",function(b){return Es(this,b);},"b4",function(b,c,
d){return Eu(this,b,c,d);},"cv",function(b){return DP(this,b);},"cI",function(){return D_(this);},"b5",function(b,c,d){return DW(this,b,c,d);}],BK,0,B,[],4,3,0,0,S,0,B,[],1,3,0,0,Bc,0,S,[],1,3,0,["C",function(){return Ew(this);},"M",function(b){DZ(this,b);}],Bm,0,B,[],3,3,0,0,BQ,0,B,[Bm],3,3,0,0]);
$rt_metadata([L,0,B,[BQ],1,3,0,0,BP,0,L,[],0,0,0,["u",function(){CJ(this);}],Cl,0,B,[],3,3,0,0,Be,0,B,[Cl],3,3,0,0,R,0,B,[Be],1,3,0,0,Bh,0,B,[Be],3,3,0,0,Bt,0,R,[Bh],1,3,0,0,Cy,0,B,[],3,3,0,0,B2,0,B,[],3,3,0,0,CQ,0,Bt,[Cy,V,B2],0,3,0,0,By,0,Bc,[],0,0,0,0,Df,0,B,[],0,3,0,0,Br,0,B,[],3,3,0,0,Ct,0,B,[Br],0,3,0,0,Cv,0,B,[Br],0,3,0,0,CX,0,B,[],4,3,0,0,DH,0,B,[],0,3,0,0,Bk,0,F,[],0,3,0,0,Dh,0,B,[BF],1,3,0,["bN",function(b){return Eg(this,b);},"ck",function(){return D9(this);}],Dg,0,B,[],4,3,0,0,Bv,0,F,[],0,3,0,0,CL,
0,F,[],0,3,0,0,BY,0,B,[],3,3,0,0,Co,0,B,[BY],0,3,0,0,B6,0,L,[],0,3,0,0,B5,0,Bc,[],0,0,0,0,BJ,0,B,[],0,3,ED,0,BZ,0,B,[Be],3,3,0,0,Cn,0,B,[BZ],3,3,0,0,B$,0,R,[Cn],0,3,0,0,BM,0,B,[],3,3,0,0,CB,0,B,[BM],0,3,0,["T",function(b){return DY(this,b);}],CC,0,B,[BM],0,3,0,["T",function(b){return Ev(this,b);}],Cg,0,L,[],0,3,0,["u",function(){Dq(this);}],Bp,0,B,[],3,3,0,0,Cd,0,B,[Bp],0,3,0,0,Cz,0,B,[],3,3,0,0,Cw,0,B,[Cz],0,0,0,0,BX,0,B,[],3,3,0,0,B3,0,B,[BX],0,0,0,0,Cq,0,F,[],0,3,0,0,Cc,0,S,[],0,3,0,["C",function(){return Et(this);
},"M",function(b){DT(this,b);}],BE,0,T,[],0,3,0,0,CD,0,F,[],0,3,0,0,B1,0,B,[Bm],0,3,0,["u",function(){D4(this);}],BS,0,B,[],3,3,0,0,Cr,0,B,[BS],0,3,0,0,CK,0,B,[Bm],0,3,0,["u",function(){D6(this);}],Ce,0,B,[Bp],0,3,0,0,Db,0,B,[],4,3,0,0]);
$rt_metadata([Ca,0,B,[P],3,3,0,0,Cj,0,B,[Ca],0,3,0,["cs",function(b){return Ej(this,b);}]]);
function $rt_array(cls,data){this.c0=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@","0","","application-content","null","The given space is already hosted by a slot","Successor does not belong to this slot","div","\n  ","label","Please, enter your name",":\n  ","input","type","text","\n","\n\n","\n  Hello, ","i","Can\'t set attribute to root node","Can\'t apply modifier to root node"]);
Bn.prototype.toString=function(){return $rt_ustr(this);};
Bn.prototype.valueOf=Bn.prototype.toString;B.prototype.toString=function(){return $rt_ustr(D1(this));};
B.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(Ez);
(function(){var c;c=Ds.prototype;c.dispatchEvent=c.cv;c.addEventListener=c.b2;c.removeEventListener=c.bU;c.getLength=c.cI;c.get=c.bW;c.addEventListener=c.b5;c.removeEventListener=c.b4;c=Dh.prototype;c.getLength=c.ck;c.get=c.bN;c=Cj.prototype;c.handleEvent=c.cs;})();
})();

//# sourceMappingURL=classes.js.map