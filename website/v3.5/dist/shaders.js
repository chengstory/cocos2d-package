cc.SHADER_POSITION_UCOLOR_FRAG="precision lowp float;\nvarying vec4 v_fragmentColor;\nvoid main()                              \n{ \n    gl_FragColor = v_fragmentColor;      \n}\n",cc.SHADER_POSITION_UCOLOR_VERT="attribute vec4 a_position;\nuniform    vec4 u_color;\nuniform float u_pointSize;\nvarying lowp vec4 v_fragmentColor; \nvoid main(void)   \n{\n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    gl_PointSize = u_pointSize;          \n    v_fragmentColor = u_color;           \n}",cc.SHADER_POSITION_COLOR_FRAG="precision lowp float; \nvarying vec4 v_fragmentColor; \nvoid main() \n{ \n     gl_FragColor = v_fragmentColor; \n} ",cc.SHADER_POSITION_COLOR_VERT="attribute vec4 a_position;\nattribute vec4 a_color;\nvarying lowp vec4 v_fragmentColor;\nvoid main()\n{\n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color;             \n}",cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG="// #extension GL_OES_standard_derivatives : enable\nvarying mediump vec4 v_color;\nvarying mediump vec2 v_texcoord;\nvoid main()	\n{ \n// #if defined GL_OES_standard_derivatives	\n// gl_FragColor = v_color*smoothstep(0.0, length(fwidth(v_texcoord)), 1.0 - length(v_texcoord)); \n// #else	\ngl_FragColor = v_color * step(0.0, 1.0 - length(v_texcoord)); \n// #endif \n}",cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT="attribute mediump vec4 a_position; \nattribute mediump vec2 a_texcoord; \nattribute mediump vec4 a_color;	\nvarying mediump vec4 v_color; \nvarying mediump vec2 v_texcoord;	\nvoid main() \n{ \n     v_color = a_color;//vec4(a_color.rgb * a_color.a, a_color.a); \n     v_texcoord = a_texcoord; \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n}",cc.SHADER_POSITION_TEXTURE_FRAG="precision lowp float;   \nvarying vec2 v_texCoord;  \nvoid main() \n{  \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord);   \n}",cc.SHADER_POSITION_TEXTURE_VERT="attribute vec4 a_position; \nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;               \n}",cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG="precision lowp float;  \nuniform vec4 u_color; \nvarying vec2 v_texCoord; \nvoid main() \n{  \n    gl_FragColor =  texture2D(CC_Texture0, v_texCoord) * u_color;    \n}",cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT="attribute vec4 a_position;\nattribute vec2 a_texCoord; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_texCoord = a_texCoord;                 \n}",cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG="precision lowp float;  \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nvoid main() \n{ \n    gl_FragColor = vec4( v_fragmentColor.rgb,         \n        v_fragmentColor.a * texture2D(CC_Texture0, v_texCoord).a   \n    ); \n}",cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT="attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color; \n    v_texCoord = a_texCoord; \n}",cc.SHADER_POSITION_TEXTURE_COLOR_FRAG="precision lowp float;\nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nvoid main() \n{ \n    gl_FragColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord); \n}",cc.SHADER_POSITION_TEXTURE_COLOR_VERT="attribute vec4 a_position; \nattribute vec2 a_texCoord; \nattribute vec4 a_color;  \nvarying lowp vec4 v_fragmentColor; \nvarying mediump vec2 v_texCoord; \nvoid main() \n{ \n    gl_Position = (CC_PMatrix * CC_MVMatrix) * a_position;  \n    v_fragmentColor = a_color; \n    v_texCoord = a_texCoord; \n}",cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG="precision lowp float;   \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord;   \nuniform float CC_alpha_value; \nvoid main() \n{  \n    vec4 texColor = texture2D(CC_Texture0, v_texCoord);  \n    if ( texColor.a <= CC_alpha_value )          \n        discard; \n    gl_FragColor = texColor * v_fragmentColor;  \n}",cc.SHADEREX_SWITCHMASK_FRAG="precision lowp float; \nvarying vec4 v_fragmentColor; \nvarying vec2 v_texCoord; \nuniform sampler2D u_texture;  \nuniform sampler2D   u_mask;   \nvoid main()  \n{  \n    vec4 texColor   = texture2D(u_texture, v_texCoord);  \n    vec4 maskColor  = texture2D(u_mask, v_texCoord); \n    vec4 finalColor = vec4(texColor.r, texColor.g, texColor.b, maskColor.a * texColor.a);        \n    gl_FragColor    = v_fragmentColor * finalColor; \n}",cc.shaderCache={TYPE_POSITION_TEXTURECOLOR:0,TYPE_POSITION_TEXTURECOLOR_ALPHATEST:1,TYPE_POSITION_COLOR:2,TYPE_POSITION_TEXTURE:3,TYPE_POSITION_TEXTURE_UCOLOR:4,TYPE_POSITION_TEXTURE_A8COLOR:5,TYPE_POSITION_UCOLOR:6,TYPE_POSITION_LENGTH_TEXTURECOLOR:7,TYPE_MAX:8,_programs:{},_init:function(){return this.loadDefaultShaders(),!0},_loadDefaultShader:function(a,b){switch(b){case this.TYPE_POSITION_TEXTURECOLOR:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT,cc.SHADER_POSITION_TEXTURE_COLOR_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_COLOR,cc.VERTEX_ATTRIB_COLOR),a.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD,cc.VERTEX_ATTRIB_TEX_COORDS);break;case this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_COLOR_VERT,cc.SHADER_POSITION_TEXTURE_COLOR_ALPHATEST_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_COLOR,cc.VERTEX_ATTRIB_COLOR),a.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD,cc.VERTEX_ATTRIB_TEX_COORDS);break;case this.TYPE_POSITION_COLOR:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_VERT,cc.SHADER_POSITION_COLOR_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_COLOR,cc.VERTEX_ATTRIB_COLOR);break;case this.TYPE_POSITION_TEXTURE:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_VERT,cc.SHADER_POSITION_TEXTURE_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD,cc.VERTEX_ATTRIB_TEX_COORDS);break;case this.TYPE_POSITION_TEXTURE_UCOLOR:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_UCOLOR_VERT,cc.SHADER_POSITION_TEXTURE_UCOLOR_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD,cc.VERTEX_ATTRIB_TEX_COORDS);break;case this.TYPE_POSITION_TEXTURE_A8COLOR:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_TEXTURE_A8COLOR_VERT,cc.SHADER_POSITION_TEXTURE_A8COLOR_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_COLOR,cc.VERTEX_ATTRIB_COLOR),a.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD,cc.VERTEX_ATTRIB_TEX_COORDS);break;case this.TYPE_POSITION_UCOLOR:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_UCOLOR_VERT,cc.SHADER_POSITION_UCOLOR_FRAG),a.addAttribute("aVertex",cc.VERTEX_ATTRIB_POSITION);break;case this.TYPE_POSITION_LENGTH_TEXTURECOLOR:a.initWithVertexShaderByteArray(cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_VERT,cc.SHADER_POSITION_COLOR_LENGTH_TEXTURE_FRAG),a.addAttribute(cc.ATTRIBUTE_NAME_POSITION,cc.VERTEX_ATTRIB_POSITION),a.addAttribute(cc.ATTRIBUTE_NAME_TEX_COORD,cc.VERTEX_ATTRIB_TEX_COORDS),a.addAttribute(cc.ATTRIBUTE_NAME_COLOR,cc.VERTEX_ATTRIB_COLOR);break;default:return void cc.log("cocos2d: cc.shaderCache._loadDefaultShader, error shader type")}a.link(),a.updateUniforms()},loadDefaultShaders:function(){var a=new cc.GLProgram;this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURECOLOR),this._programs[cc.SHADER_POSITION_TEXTURECOLOR]=a,this._programs.ShaderPositionTextureColor=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST),this._programs[cc.SHADER_POSITION_TEXTURECOLORALPHATEST]=a,this._programs.ShaderPositionTextureColorAlphaTest=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_COLOR),this._programs[cc.SHADER_POSITION_COLOR]=a,this._programs.ShaderPositionColor=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURE),this._programs[cc.SHADER_POSITION_TEXTURE]=a,this._programs.ShaderPositionTexture=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURE_UCOLOR),this._programs[cc.SHADER_POSITION_TEXTURE_UCOLOR]=a,this._programs.ShaderPositionTextureUColor=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURE_A8COLOR),this._programs[cc.SHADER_POSITION_TEXTUREA8COLOR]=a,this._programs.ShaderPositionTextureA8Color=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_UCOLOR),this._programs[cc.SHADER_POSITION_UCOLOR]=a,this._programs.ShaderPositionUColor=a,a=new cc.GLProgram,this._loadDefaultShader(a,this.TYPE_POSITION_LENGTH_TEXTURECOLOR),this._programs[cc.SHADER_POSITION_LENGTHTEXTURECOLOR]=a,this._programs.ShaderPositionLengthTextureColor=a},reloadDefaultShaders:function(){var a=this.programForKey(cc.SHADER_POSITION_TEXTURECOLOR);a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURECOLOR),a=this.programForKey(cc.SHADER_POSITION_TEXTURECOLORALPHATEST),a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURECOLOR_ALPHATEST),a=this.programForKey(cc.SHADER_POSITION_COLOR),a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_COLOR),a=this.programForKey(cc.SHADER_POSITION_TEXTURE),a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURE),a=this.programForKey(cc.SHADER_POSITION_TEXTURE_UCOLOR),a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURE_UCOLOR),a=this.programForKey(cc.SHADER_POSITION_TEXTUREA8COLOR),a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_TEXTURE_A8COLOR),a=this.programForKey(cc.SHADER_POSITION_UCOLOR),a.reset(),this._loadDefaultShader(a,this.TYPE_POSITION_UCOLOR)},programForKey:function(a){return this._programs[a]},getProgram:function(a){return this._programs[a]},addProgram:function(a,b){this._programs[b]=a}},cc.HashUniformEntry=function(a,b,c){this.value=a,this.location=b,this.hh=c||{}},cc.GLProgram=cc.Class.extend({_glContext:null,_programObj:null,_vertShader:null,_fragShader:null,_uniforms:null,_hashForUniforms:null,_usesTime:!1,_updateUniformLocation:function(a,b,c){if(null==a)return!1;for(var d=!0,e=null,f=0;f<this._hashForUniforms.length;f++)this._hashForUniforms[f].location==a&&(e=this._hashForUniforms[f]);return e?e.value==b?d=!1:e.value=b:(e=new cc.HashUniformEntry,e.location=a,e.value=b,this._hashForUniforms.push(e)),d},_description:function(){return"<CCGLProgram = "+this.toString()+" | Program = "+this._programObj.toString()+", VertexShader = "+this._vertShader.toString()+", FragmentShader = "+this._fragShader.toString()+">"},_compileShader:function(a,b,c){if(!c||!a)return!1;var d=cc.GLProgram._isHighpSupported()?"precision highp float;\n":"precision mediump float;\n";c=d+"uniform mat4 CC_PMatrix;         \nuniform mat4 CC_MVMatrix;        \nuniform mat4 CC_MVPMatrix;       \nuniform vec4 CC_Time;            \nuniform vec4 CC_SinTime;         \nuniform vec4 CC_CosTime;         \nuniform vec4 CC_Random01;        \nuniform sampler2D CC_Texture0;   \n//CC INCLUDES END                \n"+c,this._glContext.shaderSource(a,c),this._glContext.compileShader(a);var e=this._glContext.getShaderParameter(a,this._glContext.COMPILE_STATUS);return e||(cc.log("cocos2d: ERROR: Failed to compile shader:\n"+this._glContext.getShaderSource(a)),cc.log(b===this._glContext.VERTEX_SHADER?"cocos2d: \n"+this.vertexShaderLog():"cocos2d: \n"+this.fragmentShaderLog())),e===!0},ctor:function(a,b,c){this._uniforms=[],this._hashForUniforms=[],this._glContext=c||cc._renderContext,a&&b&&this.init(a,b)},destroyProgram:function(){this._vertShader=null,this._fragShader=null,this._uniforms=null,this._hashForUniforms=null,this._glContext.deleteProgram(this._programObj)},initWithVertexShaderByteArray:function(a,b){var c=this._glContext;return this._programObj=c.createProgram(),this._vertShader=null,this._fragShader=null,a&&(this._vertShader=c.createShader(c.VERTEX_SHADER),this._compileShader(this._vertShader,c.VERTEX_SHADER,a)||cc.log("cocos2d: ERROR: Failed to compile vertex shader")),b&&(this._fragShader=c.createShader(c.FRAGMENT_SHADER),this._compileShader(this._fragShader,c.FRAGMENT_SHADER,b)||cc.log("cocos2d: ERROR: Failed to compile fragment shader")),this._vertShader&&c.attachShader(this._programObj,this._vertShader),cc.checkGLErrorDebug(),this._fragShader&&c.attachShader(this._programObj,this._fragShader),this._hashForUniforms.length=0,cc.checkGLErrorDebug(),!0},initWithString:function(a,b){return this.initWithVertexShaderByteArray(a,b)},initWithVertexShaderFilename:function(a,b){var c=cc.loader.getRes(a);if(!c)throw"Please load the resource firset : "+a;var d=cc.loader.getRes(b);if(!d)throw"Please load the resource firset : "+b;return this.initWithVertexShaderByteArray(c,d)},init:function(a,b){return this.initWithVertexShaderFilename(a,b)},addAttribute:function(a,b){this._glContext.bindAttribLocation(this._programObj,b,a)},link:function(){if(!this._programObj)return cc.log("cc.GLProgram.link(): Cannot link invalid program"),!1;if(this._glContext.linkProgram(this._programObj),this._vertShader&&this._glContext.deleteShader(this._vertShader),this._fragShader&&this._glContext.deleteShader(this._fragShader),this._vertShader=null,this._fragShader=null,cc.game.config[cc.game.CONFIG_KEY.debugMode]){var a=this._glContext.getProgramParameter(this._programObj,this._glContext.LINK_STATUS);if(!a)return cc.log("cocos2d: ERROR: Failed to link program: "+this._glContext.getProgramInfoLog(this._programObj)),cc.glDeleteProgram(this._programObj),this._programObj=null,!1}return!0},use:function(){cc.glUseProgram(this._programObj)},updateUniforms:function(){this._uniforms[cc.UNIFORM_PMATRIX]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_PMATRIX_S),this._uniforms[cc.UNIFORM_MVMATRIX]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_MVMATRIX_S),this._uniforms[cc.UNIFORM_MVPMATRIX]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_MVPMATRIX_S),this._uniforms[cc.UNIFORM_TIME]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_TIME_S),this._uniforms[cc.UNIFORM_SINTIME]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_SINTIME_S),this._uniforms[cc.UNIFORM_COSTIME]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_COSTIME_S),this._usesTime=null!=this._uniforms[cc.UNIFORM_TIME]||null!=this._uniforms[cc.UNIFORM_SINTIME]||null!=this._uniforms[cc.UNIFORM_COSTIME],this._uniforms[cc.UNIFORM_RANDOM01]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_RANDOM01_S),this._uniforms[cc.UNIFORM_SAMPLER]=this._glContext.getUniformLocation(this._programObj,cc.UNIFORM_SAMPLER_S),this.use(),this.setUniformLocationWith1i(this._uniforms[cc.UNIFORM_SAMPLER],0)},getUniformLocationForName:function(a){if(!a)throw"cc.GLProgram.getUniformLocationForName(): uniform name should be non-null";if(!this._programObj)throw"cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized";return this._glContext.getUniformLocation(this._programObj,a)},getUniformMVPMatrix:function(){return this._uniforms[cc.UNIFORM_MVPMATRIX]},getUniformSampler:function(){return this._uniforms[cc.UNIFORM_SAMPLER]},setUniformLocationWith1i:function(a,b){var c=this._updateUniformLocation(a,b);c&&this._glContext.uniform1i(a,b)},setUniformLocationWith2i:function(a,b,c){var d=[b,c],e=this._updateUniformLocation(a,d);e&&this._glContext.uniform2i(a,b,c)},setUniformLocationWith3i:function(a,b,c,d){var e=[b,c,d],f=this._updateUniformLocation(a,e);f&&this._glContext.uniform3i(a,b,c,d)},setUniformLocationWith4i:function(a,b,c,d,e){var f=[b,c,d,e],g=this._updateUniformLocation(a,f);g&&this._glContext.uniform4i(a,b,c,d,e)},setUniformLocationWith2iv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniform2iv(a,b)},setUniformLocationWith3iv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniform3iv(a,b)},setUniformLocationWith4iv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniform4iv(a,b)},setUniformLocationI32:function(a,b){this.setUniformLocationWith1i(arguments[0],arguments[1])},setUniformLocationWith1f:function(a,b){var c=this._updateUniformLocation(a,b);c&&this._glContext.uniform1f(a,b)},setUniformLocationWith2f:function(a,b,c){var d=[b,c],e=this._updateUniformLocation(a,d);e&&this._glContext.uniform2f(a,b,c)},setUniformLocationWith3f:function(a,b,c,d){var e=[b,c,d],f=this._updateUniformLocation(a,e);f&&this._glContext.uniform3f(a,b,c,d)},setUniformLocationWith4f:function(a,b,c,d,e){var f=[b,c,d,e],g=this._updateUniformLocation(a,f);g&&this._glContext.uniform4f(a,b,c,d,e)},setUniformLocationWith2fv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniform2fv(a,b)},setUniformLocationWith3fv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniform3fv(a,b)},setUniformLocationWith4fv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniform4fv(a,b)},setUniformLocationWithMatrix4fv:function(a,b,c){var d=this._updateUniformLocation(a,b);d&&this._glContext.uniformMatrix4fv(a,!1,b)},setUniformLocationF32:function(){if(!(arguments.length<2))switch(arguments.length){case 2:this.setUniformLocationWith1f(arguments[0],arguments[1]);break;case 3:this.setUniformLocationWith2f(arguments[0],arguments[1],arguments[2]);break;case 4:this.setUniformLocationWith3f(arguments[0],arguments[1],arguments[2],arguments[3]);break;case 5:this.setUniformLocationWith4f(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4])}},setUniformsForBuiltins:function(){var a=new cc.math.Matrix4,b=new cc.math.Matrix4,c=new cc.math.Matrix4;if(cc.kmGLGetMatrix(cc.KM_GL_PROJECTION,a),cc.kmGLGetMatrix(cc.KM_GL_MODELVIEW,b),cc.kmMat4Multiply(c,a,b),this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX],a.mat,1),this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX],b.mat,1),this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX],c.mat,1),this._usesTime){var d=cc.director,e=d.getTotalFrames()*d.getAnimationInterval();this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_TIME],e/10,e,2*e,4*e),this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_SINTIME],e/8,e/4,e/2,Math.sin(e)),this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_COSTIME],e/8,e/4,e/2,Math.cos(e))}-1!==this._uniforms[cc.UNIFORM_RANDOM01]&&this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_RANDOM01],Math.random(),Math.random(),Math.random(),Math.random())},_setUniformsForBuiltinsForRenderer:function(a){if(a&&a._renderCmd){var b=new cc.math.Matrix4,c=new cc.math.Matrix4;if(cc.kmGLGetMatrix(cc.KM_GL_PROJECTION,b),cc.kmMat4Multiply(c,b,a._renderCmd._stackMatrix),this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX],b.mat,1),this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX],a._renderCmd._stackMatrix.mat,1),this.setUniformLocationWithMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX],c.mat,1),this._usesTime){var d=cc.director,e=d.getTotalFrames()*d.getAnimationInterval();this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_TIME],e/10,e,2*e,4*e),this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_SINTIME],e/8,e/4,e/2,Math.sin(e)),this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_COSTIME],e/8,e/4,e/2,Math.cos(e))}-1!==this._uniforms[cc.UNIFORM_RANDOM01]&&this.setUniformLocationWith4f(this._uniforms[cc.UNIFORM_RANDOM01],Math.random(),Math.random(),Math.random(),Math.random())}},setUniformForModelViewProjectionMatrix:function(){this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX],!1,cc.getMat4MultiplyValue(cc.projection_matrix_stack.top,cc.modelview_matrix_stack.top))},setUniformForModelViewProjectionMatrixWithMat4:function(a){cc.kmMat4Multiply(a,cc.projection_matrix_stack.top,cc.modelview_matrix_stack.top),this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVPMATRIX],!1,a.mat)},setUniformForModelViewAndProjectionMatrixWithMat4:function(){this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX],!1,cc.modelview_matrix_stack.top.mat),this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX],!1,cc.projection_matrix_stack.top.mat)},_setUniformForMVPMatrixWithMat4:function(a){if(!a)throw"modelView matrix is undefined.";this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_MVMATRIX],!1,a.mat),this._glContext.uniformMatrix4fv(this._uniforms[cc.UNIFORM_PMATRIX],!1,cc.projection_matrix_stack.top.mat)},vertexShaderLog:function(){return this._glContext.getShaderInfoLog(this._vertShader)},getVertexShaderLog:function(){return this._glContext.getShaderInfoLog(this._vertShader)},getFragmentShaderLog:function(){return this._glContext.getShaderInfoLog(this._vertShader)},fragmentShaderLog:function(){return this._glContext.getShaderInfoLog(this._fragShader)},programLog:function(){return this._glContext.getProgramInfoLog(this._programObj)},getProgramLog:function(){return this._glContext.getProgramInfoLog(this._programObj)},reset:function(){this._vertShader=null,this._fragShader=null,this._uniforms.length=0,this._glContext.deleteProgram(this._programObj),this._programObj=null;for(var a=0;a<this._hashForUniforms.length;a++)this._hashForUniforms[a].value=null,this._hashForUniforms[a]=null;this._hashForUniforms.length=0},getProgram:function(){return this._programObj},retain:function(){},release:function(){}}),cc.GLProgram.create=function(a,b){return new cc.GLProgram(a,b)},cc.GLProgram._highpSupported=null,cc.GLProgram._isHighpSupported=function(){if(null==cc.GLProgram._highpSupported){var a=cc._renderContext,b=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT);cc.GLProgram._highpSupported=0!==b.precision}return cc.GLProgram._highpSupported},cc.setProgram=function(a,b){a.shaderProgram=b;var c=a.children;if(c)for(var d=0;d<c.length;d++)cc.setProgram(c[d],b)},cc._currentProjectionMatrix=-1,cc._vertexAttribPosition=!1,cc._vertexAttribColor=!1,cc._vertexAttribTexCoords=!1,cc.ENABLE_GL_STATE_CACHE&&(cc.MAX_ACTIVETEXTURE=16,cc._currentShaderProgram=-1,cc._currentBoundTexture=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],cc._blendingSource=-1,cc._blendingDest=-1,cc._GLServerState=0,cc.TEXTURE_ATLAS_USE_VAO&&(cc._uVAO=0)),cc.glInvalidateStateCache=function(){if(cc.kmGLFreeAll(),cc._currentProjectionMatrix=-1,cc._vertexAttribPosition=!1,cc._vertexAttribColor=!1,cc._vertexAttribTexCoords=!1,cc.ENABLE_GL_STATE_CACHE){cc._currentShaderProgram=-1;for(var a=0;a<cc.MAX_ACTIVETEXTURE;a++)cc._currentBoundTexture[a]=-1;cc._blendingSource=-1,cc._blendingDest=-1,cc._GLServerState=0}},cc.glUseProgram=function(a){a!==cc._currentShaderProgram&&(cc._currentShaderProgram=a,cc._renderContext.useProgram(a))},cc.ENABLE_GL_STATE_CACHE||(cc.glUseProgram=function(a){cc._renderContext.useProgram(a)}),cc.glDeleteProgram=function(a){cc.ENABLE_GL_STATE_CACHE&&a===cc._currentShaderProgram&&(cc._currentShaderProgram=-1),gl.deleteProgram(a)},cc.glBlendFunc=function(a,b){(a!==cc._blendingSource||b!==cc._blendingDest)&&(cc._blendingSource=a,cc._blendingDest=b,cc.setBlending(a,b))},cc.setBlending=function(a,b){var c=cc._renderContext;a===c.ONE&&b===c.ZERO?c.disable(c.BLEND):(c.enable(c.BLEND),cc._renderContext.blendFunc(a,b))},cc.glBlendFuncForParticle=function(a,b){if(a!==cc._blendingSource||b!==cc._blendingDest){cc._blendingSource=a,cc._blendingDest=b;var c=cc._renderContext;a===c.ONE&&b===c.ZERO?c.disable(c.BLEND):(c.enable(c.BLEND),c.blendFuncSeparate(c.SRC_ALPHA,b,a,b))}},cc.ENABLE_GL_STATE_CACHE||(cc.glBlendFunc=cc.setBlending),cc.glBlendResetToCache=function(){var a=cc._renderContext;a.blendEquation(a.FUNC_ADD),cc.ENABLE_GL_STATE_CACHE?cc.setBlending(cc._blendingSource,cc._blendingDest):cc.setBlending(a.BLEND_SRC,a.BLEND_DST)},cc.setProjectionMatrixDirty=function(){cc._currentProjectionMatrix=-1},cc.glEnableVertexAttribs=function(a){var b=cc._renderContext,c=a&cc.VERTEX_ATTRIB_FLAG_POSITION;c!==cc._vertexAttribPosition&&(c?b.enableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION):b.disableVertexAttribArray(cc.VERTEX_ATTRIB_POSITION),cc._vertexAttribPosition=c);var d=a&cc.VERTEX_ATTRIB_FLAG_COLOR;d!==cc._vertexAttribColor&&(d?b.enableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR):b.disableVertexAttribArray(cc.VERTEX_ATTRIB_COLOR),cc._vertexAttribColor=d);var e=a&cc.VERTEX_ATTRIB_FLAG_TEX_COORDS;e!==cc._vertexAttribTexCoords&&(e?b.enableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS):b.disableVertexAttribArray(cc.VERTEX_ATTRIB_TEX_COORDS),cc._vertexAttribTexCoords=e)},cc.glBindTexture2D=function(a){cc.glBindTexture2DN(0,a)},cc.glBindTexture2DN=function(a,b){if(cc._currentBoundTexture[a]!==b){cc._currentBoundTexture[a]=b;var c=cc._renderContext;c.activeTexture(c.TEXTURE0+a),b?c.bindTexture(c.TEXTURE_2D,b._webTextureObj):c.bindTexture(c.TEXTURE_2D,null)}},cc.ENABLE_GL_STATE_CACHE||(cc.glBindTexture2DN=function(a,b){var c=cc._renderContext;c.activeTexture(c.TEXTURE0+a),b?c.bindTexture(c.TEXTURE_2D,b._webTextureObj):c.bindTexture(c.TEXTURE_2D,null)}),cc.glDeleteTexture=function(a){cc.glDeleteTextureN(0,a)},cc.glDeleteTextureN=function(a,b){cc.ENABLE_GL_STATE_CACHE&&b===cc._currentBoundTexture[a]&&(cc._currentBoundTexture[a]=-1),cc._renderContext.deleteTexture(b)},cc.glBindVAO=function(a){cc.TEXTURE_ATLAS_USE_VAO&&cc.ENABLE_GL_STATE_CACHE&&cc._uVAO!==a&&(cc._uVAO=a)},cc.glEnable=function(a){cc.ENABLE_GL_STATE_CACHE};