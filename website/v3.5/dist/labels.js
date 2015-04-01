cc.LabelAtlas=cc.AtlasNode.extend({_string:null,_mapStartChar:null,_textureLoaded:!1,_className:"LabelAtlas",ctor:function(a,b,c,d,e){cc.AtlasNode.prototype.ctor.call(this),this._renderCmd.setCascade(),b&&cc.LabelAtlas.prototype.initWithString.call(this,a,b,c,d,e)},_createRenderCmd:function(){return cc._renderType===cc._RENDER_TYPE_WEBGL?new cc.LabelAtlas.WebGLRenderCmd(this):new cc.LabelAtlas.CanvasRenderCmd(this)},textureLoaded:function(){return this._textureLoaded},addLoadedEventListener:function(a,b){this.addEventListener("load",a,b)},initWithString:function(a,b,c,d,e){var f,g,h,i,j=a+"";if(void 0===c){var k=cc.loader.getRes(b);if(1!==parseInt(k.version,10))return cc.log("cc.LabelAtlas.initWithString(): Unsupported version. Upgrade cocos2d version"),!1;f=cc.path.changeBasename(b,k.textureFilename);var l=cc.contentScaleFactor();g=parseInt(k.itemWidth,10)/l,h=parseInt(k.itemHeight,10)/l,i=String.fromCharCode(parseInt(k.firstChar,10))}else f=b,g=c||0,h=d||0,i=e||" ";var m=null;m=f instanceof cc.Texture2D?f:cc.textureCache.addImage(f);var n=m.isLoaded();return this._textureLoaded=n,n||(this._string=j,m.addEventListener("load",function(a){this.initWithTexture(m,g,h,j.length),this.string=this._string,this.setColor(this._renderCmd._displayedColor),this.dispatchEvent("load")},this)),this.initWithTexture(m,g,h,j.length)?(this._mapStartChar=i,this.string=j,!0):!1},setColor:function(a){cc.AtlasNode.prototype.setColor.call(this,a),this._renderCmd.updateAtlasValues()},getString:function(){return this._string},addChild:function(a,b,c){this._renderCmd._addChild(a),cc.Node.prototype.addChild.call(this,a,b,c)},updateAtlasValues:function(){this._renderCmd.updateAtlasValues()},setString:function(a){a=String(a);var b=a.length;this._string=a,this.setContentSize(b*this._itemWidth,this._itemHeight),this._renderCmd.setString(a),this._renderCmd.updateAtlasValues(),this.quadsToDraw=b}}),function(){var a=cc.LabelAtlas.prototype;cc.defineGetterSetter(a,"opacity",a.getOpacity,a.setOpacity),cc.defineGetterSetter(a,"color",a.getColor,a.setColor),a.string,cc.defineGetterSetter(a,"string",a.getString,a.setString)}(),cc.LabelAtlas.create=function(a,b,c,d,e){return new cc.LabelAtlas(a,b,c,d,e)},function(){cc.LabelAtlas.CanvasRenderCmd=function(a){cc.AtlasNode.CanvasRenderCmd.call(this,a),this._needDraw=!1};var a=cc.LabelAtlas.CanvasRenderCmd.prototype=Object.create(cc.AtlasNode.CanvasRenderCmd.prototype);a.constructor=cc.LabelAtlas.CanvasRenderCmd,a.setCascade=function(){var a=this._node;a._cascadeOpacityEnabled=!0,a._cascadeColorEnabled=!1},a.updateAtlasValues=function(){for(var a=this._node,b=a._string||"",c=b.length,d=this._texture,e=a._itemWidth,f=a._itemHeight,g=0;c>g;g++){var h=b.charCodeAt(g)-a._mapStartChar.charCodeAt(0),i=parseInt(h%a._itemsPerRow,10),j=parseInt(h/a._itemsPerRow,10),k=cc.rect(i*e,j*f,e,f),l=b.charCodeAt(g),m=a.getChildByTag(g);m?32===l?(m.init(),m.setTextureRect(cc.rect(0,0,10,10),!1,cc.size(0,0))):(m.initWithTexture(d,k),m.visible=!0):(m=new cc.Sprite,32===l?(m.init(),m.setTextureRect(cc.rect(0,0,10,10),!1,cc.size(0,0))):m.initWithTexture(d,k),cc.Node.prototype.addChild.call(a,m,0,g)),m.setPosition(g*e+e/2,f/2)}},a.setString=function(a){var b=this._node;if(b._children)for(var c=b._children,d=c.length,e=0;d>e;e++){var f=c[e];f&&!f._lateChild&&(f.visible=!1)}},a._addChild=function(){child._lateChild=!0}}(),cc.LABEL_AUTOMATIC_WIDTH=-1,cc.LabelBMFont=cc.SpriteBatchNode.extend({_opacityModifyRGB:!1,_string:"",_config:null,_fntFile:"",_initialString:"",_alignment:cc.TEXT_ALIGNMENT_CENTER,_width:-1,_lineBreakWithoutSpaces:!1,_imageOffset:null,_reusedChar:null,_textureLoaded:!1,_className:"LabelBMFont",_createRenderCmd:function(){return cc._renderType===cc._RENDER_TYPE_WEBGL?new cc.LabelBMFont.WebGLRenderCmd(this):new cc.LabelBMFont.CanvasRenderCmd(this)},_setString:function(a,b){b?this._initialString=a:this._string=a;var c=this._children;if(c)for(var d=0;d<c.length;d++){var e=c[d];e&&e.setVisible(!1)}this._textureLoaded&&(this.createFontChars(),b&&this.updateLabel())},ctor:function(a,b,c,d,e){cc.SpriteBatchNode.prototype.ctor.call(this),this._imageOffset=cc.p(0,0),this._reusedChar=[],this._cascadeColorEnabled=!0,this._cascadeOpacityEnabled=!0,this.initWithString(a,b,c,d,e)},textureLoaded:function(){return this._textureLoaded},addLoadedEventListener:function(a,b){this.addEventListener("load",a,b)},isOpacityModifyRGB:function(){return this._opacityModifyRGB},setOpacityModifyRGB:function(a){this._opacityModifyRGB=a;var b=this._children;if(b)for(var c=0;c<b.length;c++){var d=b[c];d&&(d.opacityModifyRGB=this._opacityModifyRGB)}},_changeTextureColor:function(){this._renderCmd._changeTextureColor()},init:function(){return this.initWithString(null,null,null,null,null)},initWithString:function(a,b,c,d,e){{var f=this,g=a||"";this._renderCmd}f._config&&cc.log("cc.LabelBMFont.initWithString(): re-init is no longer supported");var h;if(b){var i=cc.loader.getRes(b);if(!i)return cc.log("cc.LabelBMFont.initWithString(): Impossible to create font. Please check file"),!1;f._config=i,f._fntFile=b,h=cc.textureCache.addImage(i.atlasName);var j=h.isLoaded();f._textureLoaded=j,j||h.addEventListener("load",function(a){var b=this;b._textureLoaded=!0,b.initWithTexture(a,b._initialString.length),b.setString(b._initialString,!0),b.dispatchEvent("load")},f)}else{h=new cc.Texture2D;var k=new Image;h.initWithElement(k),f._textureLoaded=!1}return f.initWithTexture(h,g.length)?(f._alignment=d||cc.TEXT_ALIGNMENT_LEFT,f._imageOffset=e||cc.p(0,0),f._width=null==c?-1:c,f._realOpacity=255,f._realColor=cc.color(255,255,255,255),f._contentSize.width=0,f._contentSize.height=0,f.setAnchorPoint(.5,.5),this._renderCmd._initBatchTexture(),f.setString(g,!0),!0):!1},createFontChars:function(){var a=this,b=this._renderCmd,c=b._texture||a.textureAtlas.texture,d=0,e=cc.size(0,0),f=0,g=1,h=a._string,i=h?h.length:0;if(0!==i){var j,k=a._config,l=k.kerningDict,m=k.commonHeight,n=k.fontDefDictionary;for(j=0;i-1>j;j++)10===h.charCodeAt(j)&&g++;var o=m*g,p=-(m-m*g),q=-1;for(j=0;i>j;j++){var r=h.charCodeAt(j);if(0!==r)if(10!==r){var s=l[q<<16|65535&r]||0,t=n[r];if(t){var u=cc.rect(t.rect.x,t.rect.y,t.rect.width,t.rect.height);u=cc.rectPixelsToPoints(u),u.x+=a._imageOffset.x,u.y+=a._imageOffset.y;var v=a.getChildByTag(j);v?this._renderCmd._updateCharTexture(v,u,r):(v=new cc.Sprite,v.initWithTexture(c,u,!1),v._newTextureWhenChangeColor=!0,this.addChild(v,0,j)),v.opacityModifyRGB=this._opacityModifyRGB,this._renderCmd._updateCharColorAndOpacity(v);var w=k.commonHeight-t.yOffset,x=cc.p(d+t.xOffset+.5*t.rect.width+s,p+w-.5*u.height*cc.contentScaleFactor());v.setPosition(cc.pointPixelsToPoints(x)),d+=t.xAdvance+s,q=r,d>f&&(f=d)}else cc.log("cocos2d: LabelBMFont: character not found "+h[j])}else d=0,p-=k.commonHeight}e.width=t&&t.xAdvance<t.rect.width?f-t.xAdvance+t.rect.width:f,e.height=o,a.setContentSize(cc.sizePixelsToPoints(e))}},updateString:function(a){var b=this,c=b._children;if(c)for(var d=0,e=c.length;e>d;d++){var f=c[d];f&&(f.visible=!1)}b._config&&b.createFontChars(),a||b.updateLabel()},getString:function(){return this._initialString},setString:function(a,b){a=String(a),null==b&&(b=!0),null!=a&&cc.isString(a)||(a+=""),this._initialString=a,this._setString(a,b)},_setStringForSetter:function(a){this.setString(a,!1)},setCString:function(a){this.setString(a,!0)},_getCharsWidth:function(a,b){if(0>=b)return 0;var c=this.getChildByTag(a),d=this.getChildByTag(a+b);return this._getLetterPosXLeft(d)-this._getLetterPosXLeft(c)},_checkWarp:function(a,b,c,d){for(var e=this,f=a[b],g=0,h=0;b>h;h++)g+=a[h].length;g=g+b-d;var i=e._getCharsWidth(g,a[b].length-1);if(i>c&&f.length>1){for(var j,k=f.length*(c/i)|0,l=f.substr(k),m=i-this._getCharsWidth(g+k,l.length-1),n=0,o=0;m>c&&o++<100;)k*=c/m,k=0|k,l=f.substr(k),m=i-this._getCharsWidth(g+k,l.length-1);for(o=0;c>m&&o++<100;){if(l){var p=cc.LabelTTF._wordRex.exec(l);n=p?p[0].length:1,j=l}e._lineBreakWithoutSpaces&&(n=0),k+=n,l=f.substr(k),m=i-this._getCharsWidth(g+k,l.length-1)}k-=n,0===k&&(k=1,j=j.substr(1));var q,r=f.substr(0,k);cc.LabelTTF.wrapInspection&&cc.LabelTTF._symbolRex.test(j||l)&&(q=cc.LabelTTF._lastWordRex.exec(r),n=q?q[0].length:0,e._lineBreakWithoutSpaces&&(n=0),k-=n,j=f.substr(k),r=f.substr(0,k)),cc.LabelTTF._firsrEnglish.test(j)&&(q=cc.LabelTTF._lastEnglish.exec(r),q&&r!==q[0]&&(n=q[0].length,e._lineBreakWithoutSpaces&&(n=0),k-=n,j=f.substr(k),r=f.substr(0,k))),a[b]=j||l,a.splice(b,0,r)}},updateLabel:function(){var a=this;a.string=a._initialString;var b,c,d;if(a._width>0){var e=a.string.split("\n"),f="",g=0,h=0;for(b=0;b<e.length;b++)h=e.length,this._checkWarp(e,b,a._width*this._scaleX,g),h<e.length&&g++,b>0&&(f+="\n"),f+=e[b];f+=String.fromCharCode(0),a._setString(f,!1)}if(a._alignment!==cc.TEXT_ALIGNMENT_LEFT){b=0;for(var i=0,j=a._string.length,k=[],l=0;j>l;l++)if(10!==a._string[l].charCodeAt(0)&&0!==a._string[l].charCodeAt(0))k.push(a._string[b]);else{var m=0,n=k.length;if(0===n){i++;continue}var o=b+n-1+i;if(0>o)continue;var p=a.getChildByTag(o);if(null==p)continue;m=p.getPositionX()+p._getWidth()/2;var q=0;switch(a._alignment){case cc.TEXT_ALIGNMENT_CENTER:q=a.width/2-m/2;break;case cc.TEXT_ALIGNMENT_RIGHT:q=a.width-m}if(0!==q)for(c=0;n>c;c++)o=b+c+i,0>o||(d=a.getChildByTag(o),d&&(d.x+=q));b+=n,i++,k.length=0}}},setAlignment:function(a){this._alignment=a,this.updateLabel()},_getAlignment:function(){return this._alignment},setBoundingWidth:function(a){this._width=a,this.updateLabel()},_getBoundingWidth:function(){return this._width},setLineBreakWithoutSpace:function(a){this._lineBreakWithoutSpaces=a,this.updateLabel()},setScale:function(a,b){cc.Node.prototype.setScale.call(this,a,b),this.updateLabel()},setScaleX:function(a){cc.Node.prototype.setScaleX.call(this,a),this.updateLabel()},setScaleY:function(a){cc.Node.prototype.setScaleY.call(this,a),this.updateLabel()},setFntFile:function(a){var b=this;if(null!=a&&a!==b._fntFile){var c=cc.loader.getRes(a);if(!c)return void cc.log("cc.LabelBMFont.setFntFile() : Impossible to create font. Please check file");b._fntFile=a,b._config=c;var d=cc.textureCache.addImage(c.atlasName),e=d.isLoaded();b._textureLoaded=e,b.texture=d,this._renderCmd._updateFntFileTexture(),e?b.createFontChars():d.addEventListener("load",function(a){var b=this;b._textureLoaded=!0,b.texture=a,b.createFontChars(),b._changeTextureColor(),b.updateLabel(),b.dispatchEvent("load")},b)}},getFntFile:function(){return this._fntFile},setTexture:function(a){this._renderCmd.setTexture(a)},setAnchorPoint:function(a,b){cc.Node.prototype.setAnchorPoint.call(this,a,b),this.updateLabel()},_setAnchorX:function(a){cc.Node.prototype._setAnchorX.call(this,a),this.updateLabel()},_setAnchorY:function(a){cc.Node.prototype._setAnchorY.call(this,a),this.updateLabel()},_atlasNameFromFntFile:function(a){},_kerningAmountForFirst:function(a,b){var c=0,d=a<<16|65535&b;if(this._configuration.kerningDictionary){var e=this._configuration.kerningDictionary[d.toString()];e&&(c=e.amount)}return c},_getLetterPosXLeft:function(a){return a.getPositionX()*this._scaleX-a._getWidth()*this._scaleX*a._getAnchorX()},_getLetterPosXRight:function(a){return a.getPositionX()*this._scaleX+a._getWidth()*this._scaleX*a._getAnchorX()},_isspace_unicode:function(a){return a=a.charCodeAt(0),a>=9&&13>=a||32===a||133===a||160===a||5760===a||a>=8192&&8202>=a||8232===a||8233===a||8239===a||8287===a||12288===a},_utf8_trim_ws:function(a){var b=a.length;if(!(0>=b)){var c=b-1;if(this._isspace_unicode(a[c])){for(var d=c-1;d>=0&&this._isspace_unicode(a[d]);--d)c=d;this._utf8_trim_from(a,c)}}},_utf8_trim_from:function(a,b){var c=a.length;b>=c||0>b||a.splice(b,c)}}),function(){var a=cc.LabelBMFont.prototype;cc.EventHelper.prototype.apply(a),a.string,cc.defineGetterSetter(a,"string",a.getString,a._setStringForSetter),a.boundingWidth,cc.defineGetterSetter(a,"boundingWidth",a._getBoundingWidth,a.setBoundingWidth),a.textAlign,cc.defineGetterSetter(a,"textAlign",a._getAlignment,a.setAlignment)}(),cc.LabelBMFont.create=function(a,b,c,d,e){return new cc.LabelBMFont(a,b,c,d,e)},cc._fntLoader={INFO_EXP:/info [^\n]*(\n|$)/gi,COMMON_EXP:/common [^\n]*(\n|$)/gi,PAGE_EXP:/page [^\n]*(\n|$)/gi,CHAR_EXP:/char [^\n]*(\n|$)/gi,KERNING_EXP:/kerning [^\n]*(\n|$)/gi,ITEM_EXP:/\w+=[^ \r\n]+/gi,INT_EXP:/^[\-]?\d+$/,_parseStrToObj:function(a){var b=a.match(this.ITEM_EXP),c={};if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d],g=f.indexOf("="),h=f.substring(0,g),i=f.substring(g+1);i.match(this.INT_EXP)?i=parseInt(i):'"'===i[0]&&(i=i.substring(1,i.length-1)),c[h]=i}return c},parseFnt:function(a,b){var c=this,d={},e=c._parseStrToObj(a.match(c.INFO_EXP)[0]),f=e.padding.split(","),g=({left:parseInt(f[0]),top:parseInt(f[1]),right:parseInt(f[2]),bottom:parseInt(f[3])},c._parseStrToObj(a.match(c.COMMON_EXP)[0]));if(d.commonHeight=g.lineHeight,cc._renderType===cc._RENDER_TYPE_WEBGL){var h=cc.configuration.getMaxTextureSize();(g.scaleW>h.width||g.scaleH>h.height)&&cc.log("cc.LabelBMFont._parseCommonArguments(): page can't be larger than supported")}1!==g.pages&&cc.log("cc.LabelBMFont._parseCommonArguments(): only supports 1 page");var i=c._parseStrToObj(a.match(c.PAGE_EXP)[0]);0!==i.id&&cc.log("cc.LabelBMFont._parseImageFileName() : file could not be found"),d.atlasName=cc.path.changeBasename(b,i.file);for(var j=a.match(c.CHAR_EXP),k=d.fontDefDictionary={},l=0,m=j.length;m>l;l++){var n=c._parseStrToObj(j[l]),o=n.id;k[o]={rect:{x:n.x,y:n.y,width:n.width,height:n.height},xOffset:n.xoffset,yOffset:n.yoffset,xAdvance:n.xadvance}}var p=d.kerningDict={},q=a.match(c.KERNING_EXP);if(q)for(var l=0,m=q.length;m>l;l++){var r=c._parseStrToObj(q[l]);p[r.first<<16|65535&r.second]=r.amount}return d},load:function(a,b,c,d){var e=this;cc.loader.loadTxt(a,function(a,c){return a?d(a):void d(null,e.parseFnt(c,b))})}},cc.loader.register(["fnt"],cc._fntLoader),function(){cc.LabelBMFont.CanvasRenderCmd=function(a){cc.SpriteBatchNode.CanvasRenderCmd.call(this,a),this._needDraw=!0};var a=cc.LabelBMFont.CanvasRenderCmd.prototype=Object.create(cc.SpriteBatchNode.CanvasRenderCmd.prototype);a.constructor=cc.LabelBMFont.CanvasRenderCmd,a.rendering=function(){},a._updateCharTexture=function(a,b,c){32===c?a.setTextureRect(b,!1,cc.size(0,0)):(a.setTextureRect(b,!1),a.visible=!0)},a._updateCharColorAndOpacity=function(a){a._displayedColor=this._displayedColor,a._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.colorDirty),a._displayedOpacity=this._displayedOpacity,a._renderCmd.setDirtyFlag(cc.Node._dirtyFlags.opacityDirty)},a._updateFntFileTexture=function(){var a=this._node;a._originalTexture=a.texture},a.setTexture=function(a){for(var b=this._node,c=b._children,d=this._displayedColor,e=0;e<c.length;e++){var f=c[e],g=f._renderCmd,h=g._displayedColor;(this._texture===g._texture||h.r===d.r&&h.g===d.g&&h.b===d.b)&&(f.texture=a)}this._texture=a},a._changeTextureColor=cc.sys._supportCanvasNewBlendModes?function(){var a=this._node,b=a.getTexture();if(b&&b.getContentSize().width>0){var c=this._originalTexture.getHtmlElementObj();if(!c)return;var d=b.getHtmlElementObj(),e=cc.rect(0,0,c.width,c.height);d instanceof HTMLCanvasElement&&!a._rectRotated?(cc.Sprite.CanvasRenderCmd._generateTintImageWithMultiply(c,this._displayedColor,e,d),a.setTexture(b)):(d=cc.Sprite.CanvasRenderCmd._generateTintImageWithMultiply(c,this._displayedColor,e),b=new cc.Texture2D,b.initWithElement(d),b.handleLoadedTexture(),a.setTexture(b))}}:function(){var a,b=this._node,c=b.getTexture();if(c&&c.getContentSize().width>0){if(a=c.getHtmlElementObj(),!a)return;var d=cc.textureCache.getTextureColors(this._originalTexture.getHtmlElementObj());d&&(a instanceof HTMLCanvasElement&&!this._rectRotated?(cc.Sprite.CanvasRenderCmd._generateTintImage(a,d,this._displayedColor,null,a),this.setTexture(c)):(a=cc.Sprite.CanvasRenderCmd._generateTintImage(a,d,this._displayedColor),c=new cc.Texture2D,c.initWithElement(a),c.handleLoadedTexture(),b.setTexture(c)))}},a._updateChildrenDisplayedOpacity=function(a){cc.Node.prototype.updateDisplayedOpacity.call(a,this._displayedOpacity)},a._updateChildrenDisplayedColor=function(a){cc.Node.prototype.updateDisplayedColor.call(a,this._displayedColor)},a._initBatchTexture=function(){}}();