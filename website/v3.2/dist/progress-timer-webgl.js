!function(){cc.ProgressTimer.WebGLRenderCmd=function(a){cc.Node.WebGLRenderCmd.call(this,a),this._needDraw=!0,this._vertexWebGLBuffer=cc._renderContext.createBuffer(),this._vertexDataCount=0,this._vertexData=null,this._vertexArrayBuffer=null,this._vertexDataDirty=!1};var a=cc.ProgressTimer.WebGLRenderCmd.prototype=Object.create(cc.Node.WebGLRenderCmd.prototype);a.constructor=cc.ProgressTimer.WebGLRenderCmd,a.rendering=function(a){var b=this._node,c=a||cc._renderContext;if(this._vertexData&&b._sprite){this._shaderProgram.use(),this._shaderProgram._setUniformForMVPMatrixWithMat4(this._stackMatrix);var d=b._sprite._blendFunc;cc.glBlendFunc(d.src,d.dst),cc.glEnableVertexAttribs(cc.VERTEX_ATTRIB_FLAG_POS_COLOR_TEX),cc.glBindTexture2D(b._sprite.texture),c.bindBuffer(c.ARRAY_BUFFER,this._vertexWebGLBuffer),this._vertexDataDirty&&(c.bufferData(c.ARRAY_BUFFER,this._vertexArrayBuffer,c.DYNAMIC_DRAW),this._vertexDataDirty=!1);var e=cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;c.vertexAttribPointer(cc.VERTEX_ATTRIB_POSITION,2,c.FLOAT,!1,e,0),c.vertexAttribPointer(cc.VERTEX_ATTRIB_COLOR,4,c.UNSIGNED_BYTE,!0,e,8),c.vertexAttribPointer(cc.VERTEX_ATTRIB_TEX_COORDS,2,c.FLOAT,!1,e,12),b._type===cc.ProgressTimer.TYPE_RADIAL?c.drawArrays(c.TRIANGLE_FAN,0,this._vertexDataCount):b._type==cc.ProgressTimer.TYPE_BAR&&(b._reverseDirection?(c.drawArrays(c.TRIANGLE_STRIP,0,this._vertexDataCount/2),c.drawArrays(c.TRIANGLE_STRIP,4,this._vertexDataCount/2),cc.g_NumberOfDraws++):c.drawArrays(c.TRIANGLE_STRIP,0,this._vertexDataCount)),cc.g_NumberOfDraws++}},a._syncStatus=function(a){var b=this._node;if(b._sprite){var c=cc.Node._dirtyFlags,d=this._dirtyFlag,e=a?a._node:null;e&&e._cascadeColorEnabled&&a._dirtyFlag&c.colorDirty&&(d|=c.colorDirty),e&&e._cascadeOpacityEnabled&&a._dirtyFlag&c.opacityDirty&&(d|=c.opacityDirty),a&&a._dirtyFlag&c.transformDirty&&(d|=c.transformDirty),this._dirtyFlag=d;var f=b._sprite._renderCmd,g=f._dirtyFlag,h=g&c.colorDirty,i=g&c.opacityDirty;h&&f._syncDisplayColor(),i&&f._syncDisplayOpacity(),(h||i)&&(f._updateColor(),this._updateColor()),this.transform(a),f._dirtyFlag=0}},a.updateStatus=function(){var a=this._node;if(a._sprite){var b=cc.Node._dirtyFlags,c=this._dirtyFlag,d=a._sprite._renderCmd,e=d._dirtyFlag,f=e&b.colorDirty,g=e&b.opacityDirty;f&&(d._updateDisplayColor(),this._dirtyFlag=this._dirtyFlag&b.colorDirty^this._dirtyFlag),g&&(d._updateDisplayOpacity(),this._dirtyFlag=this._dirtyFlag&b.opacityDirty^this._dirtyFlag),(f||g)&&(d._updateColor(),this._updateColor()),c&b.transformDirty&&this.transform(this.getParentRenderCmd(),!0)}},a.releaseData=function(){this._vertexData&&(this._vertexData=null,this._vertexArrayBuffer=null,this._vertexDataCount=0)},a.initCmd=function(){this._vertexData=null,this._vertexArrayBuffer=null,this._vertexDataCount=0,this._shaderProgram=cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR)},a._updateProgress=function(){var a=this._node,b=a._type;b===cc.ProgressTimer.TYPE_RADIAL?this._updateRadial():b===cc.ProgressTimer.TYPE_BAR&&this._updateBar(),this._vertexDataDirty=!0},a._updateBar=function(){var a=this._node;if(a._sprite){var b,c=a._percentage/100,d=a._barChangeRate,e=cc.pMult(cc.p(1-d.x+c*d.x,1-d.y+c*d.y),.5),f=cc.pSub(a._midPoint,e),g=cc.pAdd(a._midPoint,e);f.x<0&&(g.x+=-f.x,f.x=0),g.x>1&&(f.x-=g.x-1,g.x=1),f.y<0&&(g.y+=-f.y,f.y=0),g.y>1&&(f.y-=g.y-1,g.y=1);var h;if(this._reverseDirection){if(!this._vertexData){this._vertexDataCount=8;var i=cc.V2F_C4B_T2F.BYTES_PER_ELEMENT,j=8;this._vertexArrayBuffer=new ArrayBuffer(j*i);var k=[];for(b=0;j>b;b++)k[b]=new cc.V2F_C4B_T2F(null,null,null,this._vertexArrayBuffer,b*i);k[0].texCoords=this._textureCoordFromAlphaPoint(cc.p(0,1)),k[0].vertices=this._vertexFromAlphaPoint(cc.p(0,1)),k[1].texCoords=this._textureCoordFromAlphaPoint(cc.p(0,0)),k[1].vertices=this._vertexFromAlphaPoint(cc.p(0,0)),k[6].texCoords=this._textureCoordFromAlphaPoint(cc.p(1,1)),k[6].vertices=this._vertexFromAlphaPoint(cc.p(1,1)),k[7].texCoords=this._textureCoordFromAlphaPoint(cc.p(1,0)),k[7].vertices=this._vertexFromAlphaPoint(cc.p(1,0)),this._vertexData=k}h=this._vertexData,h[2].texCoords=this._textureCoordFromAlphaPoint(cc.p(f.x,g.y)),h[2].vertices=this._vertexFromAlphaPoint(cc.p(f.x,g.y)),h[3].texCoords=this._textureCoordFromAlphaPoint(cc.p(f.x,f.y)),h[3].vertices=this._vertexFromAlphaPoint(cc.p(f.x,f.y)),h[4].texCoords=this._textureCoordFromAlphaPoint(cc.p(g.x,g.y)),h[4].vertices=this._vertexFromAlphaPoint(cc.p(g.x,g.y)),h[5].texCoords=this._textureCoordFromAlphaPoint(cc.p(g.x,f.y)),h[5].vertices=this._vertexFromAlphaPoint(cc.p(g.x,f.y))}else{if(!this._vertexData){this._vertexDataCount=4;var l=cc.V2F_C4B_T2F.BYTES_PER_ELEMENT,m=4;for(this._vertexArrayBuffer=new ArrayBuffer(m*l),this._vertexData=[],b=0;m>b;b++)this._vertexData[b]=new cc.V2F_C4B_T2F(null,null,null,this._vertexArrayBuffer,b*l)}h=this._vertexData,h[0].texCoords=this._textureCoordFromAlphaPoint(cc.p(f.x,g.y)),h[0].vertices=this._vertexFromAlphaPoint(cc.p(f.x,g.y)),h[1].texCoords=this._textureCoordFromAlphaPoint(cc.p(f.x,f.y)),h[1].vertices=this._vertexFromAlphaPoint(cc.p(f.x,f.y)),h[2].texCoords=this._textureCoordFromAlphaPoint(cc.p(g.x,g.y)),h[2].vertices=this._vertexFromAlphaPoint(cc.p(g.x,g.y)),h[3].texCoords=this._textureCoordFromAlphaPoint(cc.p(g.x,f.y)),h[3].vertices=this._vertexFromAlphaPoint(cc.p(g.x,f.y))}this._updateColor()}},a._updateRadial=function(){var a=this._node;if(a._sprite){var b,c,d=a._midPoint,e=a._percentage/100,f=2*cc.PI*(a._reverseDirection?e:1-e),g=cc.p(d.x,1),h=cc.pRotateByAngle(g,d,f),i=0;if(0==e)c=g,i=0;else if(1==e)c=g,i=4;else{var j=cc.FLT_MAX,k=cc.ProgressTimer.TEXTURE_COORDS_COUNT;for(b=0;k>=b;++b){var l=(b+(k-1))%k,m=this._boundaryTexCoord(b%k),n=this._boundaryTexCoord(l);0==b?n=cc.pLerp(m,n,1-d.x):4==b&&(m=cc.pLerp(m,n,1-d.x));var o=cc.p(0,0);if(cc.pLineIntersect(m,n,d,h,o)){if(!(0!=b&&4!=b||0<=o.x&&o.x<=1))continue;o.y>=0&&o.y<j&&(j=o.y,i=b)}}c=cc.pAdd(d,cc.pMult(cc.pSub(h,d),j))}var p=!0;if(this._vertexDataCount!=i+3&&(p=!1,this._vertexData=null,this._vertexArrayBuffer=null,this._vertexDataCount=0),!this._vertexData){this._vertexDataCount=i+3;var q=this._vertexDataCount,r=cc.V2F_C4B_T2F.BYTES_PER_ELEMENT;this._vertexArrayBuffer=new ArrayBuffer(q*r);var s=[];for(b=0;q>b;b++)s[b]=new cc.V2F_C4B_T2F(null,null,null,this._vertexArrayBuffer,b*r);if(this._vertexData=s,!this._vertexData)return void cc.log("cc.ProgressTimer._updateRadial() : Not enough memory")}this._updateColor();var t=this._vertexData;if(!p)for(t[0].texCoords=this._textureCoordFromAlphaPoint(d),t[0].vertices=this._vertexFromAlphaPoint(d),t[1].texCoords=this._textureCoordFromAlphaPoint(g),t[1].vertices=this._vertexFromAlphaPoint(g),b=0;i>b;b++){var u=this._boundaryTexCoord(b);t[b+2].texCoords=this._textureCoordFromAlphaPoint(u),t[b+2].vertices=this._vertexFromAlphaPoint(u)}t[this._vertexDataCount-1].texCoords=this._textureCoordFromAlphaPoint(c),t[this._vertexDataCount-1].vertices=this._vertexFromAlphaPoint(c)}},a._boundaryTexCoord=function(a){if(a<cc.ProgressTimer.TEXTURE_COORDS_COUNT){var b=cc.ProgressTimer.TEXTURE_COORDS;return this._node._reverseDirection?cc.p(b>>7-(a<<1)&1,b>>7-((a<<1)+1)&1):cc.p(b>>(a<<1)+1&1,b>>(a<<1)&1)}return cc.p(0,0)},a._textureCoordFromAlphaPoint=function(a){var b=this._node._sprite;if(!b)return{u:0,v:0};var c=b.quad,d=cc.p(c.bl.texCoords.u,c.bl.texCoords.v),e=cc.p(c.tr.texCoords.u,c.tr.texCoords.v);if(b.textureRectRotated){var f=a.x;a.x=a.y,a.y=f}return{u:d.x*(1-a.x)+e.x*a.x,v:d.y*(1-a.y)+e.y*a.y}},a._vertexFromAlphaPoint=function(a){var b=this._node._sprite;if(!b)return{x:0,y:0};var c=b.quad,d=cc.p(c.bl.vertices.x,c.bl.vertices.y),e=cc.p(c.tr.vertices.x,c.tr.vertices.y);return{x:d.x*(1-a.x)+e.x*a.x,y:d.y*(1-a.y)+e.y*a.y}},a._updateColor=function(){var a=this._node;if(a._sprite&&this._vertexData){for(var b=a._sprite.quad.tl.colors,c=this._vertexData,d=0,e=this._vertexDataCount;e>d;++d)c[d].colors=b;this._vertexDataDirty=!0}}}();