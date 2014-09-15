cc.DEFAULT_SPRITE_BATCH_CAPACITY=29,cc.SpriteBatchNode=cc.Node.extend({textureAtlas:null,_blendFunc:null,_descendants:null,_className:"SpriteBatchNode",addSpriteWithoutQuad:function(a,b,c){if(cc.assert(a,cc._LogInfos.SpriteBatchNode_addSpriteWithoutQuad_2),!(a instanceof cc.Sprite))return cc.log(cc._LogInfos.SpriteBatchNode_addSpriteWithoutQuad),null;a.atlasIndex=b;var d=0,e=this._descendants;if(e&&e.length>0)for(var f=0;f<e.length;f++){var g=e[f];g&&g.atlasIndex>=b&&++d}return e.splice(d,0,a),cc.Node.prototype.addChild.call(this,a,b,c),this.reorderBatch(!1),this},getTextureAtlas:function(){return this.textureAtlas},setTextureAtlas:function(a){a!=this.textureAtlas&&(this.textureAtlas=a)},getDescendants:function(){return this._descendants},initWithFile:function(a,b){var c=cc.textureCache.getTextureForKey(a);return c||(c=cc.textureCache.addImage(a)),this.initWithTexture(c,b)},_setNodeDirtyForCache:function(){this._cacheDirty=!0},init:function(a,b){var c=cc.textureCache.getTextureForKey(a);return c||(c=cc.textureCache.addImage(a)),this.initWithTexture(c,b)},increaseAtlasCapacity:function(){var a=this.textureAtlas.capacity,b=Math.floor(4*(a+1)/3);cc.log(cc._LogInfos.SpriteBatchNode_increaseAtlasCapacity,a,b),this.textureAtlas.resizeCapacity(b)||cc.log(cc._LogInfos.SpriteBatchNode_increaseAtlasCapacity_2)},removeChildAtIndex:function(a,b){this.removeChild(this._children[a],b)},rebuildIndexInOrder:function(a,b){var c=a.children;if(c&&c.length>0)for(var d=0;d<c.length;d++){var e=c[d];e&&e.zIndex<0&&(b=this.rebuildIndexInOrder(e,b))}if(!a==this&&(a.atlasIndex=b,b++),c&&c.length>0)for(d=0;d<c.length;d++)e=c[d],e&&e.zIndex>=0&&(b=this.rebuildIndexInOrder(e,b));return b},highestAtlasIndexInChild:function(a){var b=a.children;return b&&0!=b.length?this.highestAtlasIndexInChild(b[b.length-1]):a.atlasIndex},lowestAtlasIndexInChild:function(a){var b=a.children;return b&&0!=b.length?this.lowestAtlasIndexInChild(b[b.length-1]):a.atlasIndex},atlasIndexForChild:function(a,b){var c=a.parent,d=c.children,e=d.indexOf(a),f=c==this,g=null;return e>0&&e<cc.UINT_MAX&&(g=d[e-1]),f?0==e?0:this.highestAtlasIndexInChild(g)+1:0==e?0>b?c.atlasIndex:c.atlasIndex+1:g.zIndex<0&&0>b||g.zIndex>=0&&b>=0?this.highestAtlasIndexInChild(g)+1:c.atlasIndex+1},reorderBatch:function(a){this._reorderChildDirty=a},setBlendFunc:function(a,b){this._blendFunc=void 0===b?a:{src:a,dst:b}},getBlendFunc:function(){return this._blendFunc},reorderChild:function(a,b){return cc.assert(a,cc._LogInfos.SpriteBatchNode_reorderChild_2),-1===this._children.indexOf(a)?void cc.log(cc._LogInfos.SpriteBatchNode_reorderChild):void(b!==a.zIndex&&(cc.Node.prototype.reorderChild.call(this,a,b),this.setNodeDirty()))},removeChild:function(a,b){if(null!=a){if(-1===this._children.indexOf(a))return void cc.log(cc._LogInfos.SpriteBatchNode_removeChild);this.removeSpriteFromAtlas(a),cc.Node.prototype.removeChild.call(this,a,b)}},_mvpMatrix:null,_textureForCanvas:null,_useCache:!1,_originalTexture:null,ctor:null,_ctorForCanvas:function(a,b){cc.Node.prototype.ctor.call(this);var c;b=b||cc.DEFAULT_SPRITE_BATCH_CAPACITY,cc.isString(a)?(c=cc.textureCache.getTextureForKey(a),c||(c=cc.textureCache.addImage(a))):a instanceof cc.Texture2D&&(c=a),c&&this.initWithTexture(c,b)},_ctorForWebGL:function(a,b){cc.Node.prototype.ctor.call(this),this._mvpMatrix=new cc.kmMat4;var c;b=b||cc.DEFAULT_SPRITE_BATCH_CAPACITY,cc.isString(a)?(c=cc.textureCache.getTextureForKey(a),c||(c=cc.textureCache.addImage(a))):a instanceof cc.Texture2D&&(c=a),c&&this.initWithTexture(c,b)},updateQuadFromSprite:null,_updateQuadFromSpriteForCanvas:function(a,b){return cc.assert(a,cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite_2),a instanceof cc.Sprite?(a.batchNode=this,a.atlasIndex=b,a.dirty=!0,void a.updateTransform()):void cc.log(cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite)},_updateQuadFromSpriteForWebGL:function(a,b){if(cc.assert(a,cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite),!(a instanceof cc.Sprite))return void cc.log(cc._LogInfos.CCSpriteBatchNode_updateQuadFromSprite);for(var c=this.textureAtlas.capacity;b>=c||c==this.textureAtlas.totalQuads;)this.increaseAtlasCapacity();a.batchNode=this,a.atlasIndex=b,a.dirty=!0,a.updateTransform()},_swap:function(a,b){var c=this._descendants,d=this.textureAtlas,e=d.quads,f=c[a],g=cc.V3F_C4B_T2F_QuadCopy(e[a]);c[b].atlasIndex=a,c[a]=c[b],d.updateQuad(e[b],a),c[b]=f,d.updateQuad(g,b)},insertQuadFromSprite:null,_insertQuadFromSpriteForCanvas:function(a,b){return cc.assert(a,cc._LogInfos.CCSpriteBatchNode_insertQuadFromSprite_2),a instanceof cc.Sprite?(a.batchNode=this,a.atlasIndex=b,a.dirty=!0,a.updateTransform(),a._setCachedParent(this),void this._children.splice(b,0,a)):void cc.log(cc._LogInfos.CCSpriteBatchNode_insertQuadFromSprite)},_insertQuadFromSpriteForWebGL:function(a,b){if(cc.assert(a,cc._LogInfos.Sprite_insertQuadFromSprite_2),!(a instanceof cc.Sprite))return void cc.log(cc._LogInfos.Sprite_insertQuadFromSprite);for(var c=this.textureAtlas;b>=c.capacity||c.capacity===c.totalQuads;)this.increaseAtlasCapacity();a.batchNode=this,a.atlasIndex=b,c.insertQuad(a.quad,b),a.dirty=!0,a.updateTransform()},_updateAtlasIndex:function(a,b){var c=0,d=a.children;d&&(c=d.length);var e=0;if(0===c)e=a.atlasIndex,a.atlasIndex=b,a.arrivalOrder=0,e!=b&&this._swap(e,b),b++;else{var f=!0;d[0].zIndex>=0&&(e=a.atlasIndex,a.atlasIndex=b,a.arrivalOrder=0,e!=b&&this._swap(e,b),b++,f=!1);for(var g=0;g<d.length;g++){var h=d[g];f&&h.zIndex>=0&&(e=a.atlasIndex,a.atlasIndex=b,a.arrivalOrder=0,e!=b&&this._swap(e,b),b++,f=!1),b=this._updateAtlasIndex(h,b)}f&&(e=a.atlasIndex,a.atlasIndex=b,a.arrivalOrder=0,e!=b&&this._swap(e,b),b++)}return b},_updateBlendFunc:function(){this.textureAtlas.texture.hasPremultipliedAlpha()||(this._blendFunc.src=cc.SRC_ALPHA,this._blendFunc.dst=cc.ONE_MINUS_SRC_ALPHA)},initWithTexture:null,_initWithTextureForCanvas:function(a){return this._children=[],this._descendants=[],this._blendFunc=new cc.BlendFunc(cc.BLEND_SRC,cc.BLEND_DST),this._originalTexture=a,this._textureForCanvas=a,!0},_initWithTextureForWebGL:function(a,b){return this._children=[],this._descendants=[],this._blendFunc=new cc.BlendFunc(cc.BLEND_SRC,cc.BLEND_DST),b=b||cc.DEFAULT_SPRITE_BATCH_CAPACITY,this.textureAtlas=new cc.TextureAtlas,this.textureAtlas.initWithTexture(a,b),this._updateBlendFunc(),this.shaderProgram=cc.shaderCache.programForKey(cc.SHADER_POSITION_TEXTURECOLOR),!0},insertChild:function(a,b){a.batchNode=this,a.atlasIndex=b,a.dirty=!0;var c=this.textureAtlas;c.totalQuads>=c.capacity&&this.increaseAtlasCapacity(),c.insertQuad(a.quad,b),this._descendants.splice(b,0,a);var d=b+1,e=this._descendants;if(e&&e.length>0)for(;d<e.length;d++)e[d].atlasIndex++;var f,g=a.children;if(g)for(d=0,l=g.length||0;l>d;d++)if(f=g[d]){var h=this.atlasIndexForChild(f,f.zIndex);this.insertChild(f,h)}},appendChild:null,_appendChildForCanvas:function(a){this._reorderChildDirty=!0,a.batchNode=this,a.dirty=!0,this._descendants.push(a);var b=this._descendants.length-1;a.atlasIndex=b;for(var c=a.children,d=0,e=c.length||0;e>d;d++)this.appendChild(c[d])},_appendChildForWebGL:function(a){this._reorderChildDirty=!0,a.batchNode=this,a.dirty=!0,this._descendants.push(a);var b=this._descendants.length-1;a.atlasIndex=b;var c=this.textureAtlas;c.totalQuads==c.capacity&&this.increaseAtlasCapacity(),c.insertQuad(a.quad,b);for(var d=a.children,e=0,f=d.length||0;f>e;e++)this.appendChild(d[e])},removeSpriteFromAtlas:null,_removeSpriteFromAtlasForCanvas:function(a){a.batchNode=null;var b=this._descendants,c=b.indexOf(a);if(-1!=c){b.splice(c,1);for(var d=b.length;d>c;++c){var e=b[c];e.atlasIndex--}}var f=a.children;if(f)for(var g=0,h=f.length||0;h>g;g++)f[g]&&this.removeSpriteFromAtlas(f[g])},_removeSpriteFromAtlasForWebGL:function(a){this.textureAtlas.removeQuadAtIndex(a.atlasIndex),a.batchNode=null;var b=this._descendants,c=b.indexOf(a);if(-1!=c){b.splice(c,1);for(var d=b.length;d>c;++c){var e=b[c];e.atlasIndex--}}var f=a.children;if(f)for(var g=0,h=f.length||0;h>g;g++)f[g]&&this.removeSpriteFromAtlas(f[g])},getTexture:null,_getTextureForCanvas:function(){return this._textureForCanvas},_getTextureForWebGL:function(){return this.textureAtlas.texture},setTexture:null,_setTextureForCanvas:function(a){this._textureForCanvas=a;for(var b=this._children,c=0;c<b.length;c++)b[c].texture=a},_setTextureForWebGL:function(a){this.textureAtlas.texture=a,this._updateBlendFunc()},visit:null,_visitForCanvas:function(a){var b=a||cc._renderContext;if(this._visible){b.save(),this.transform(a);var c,d=this._children;if(d)for(this.sortAllChildren(),c=0;c<d.length;c++)d[c]&&d[c].visit(b);b.restore()}},_visitForWebGL:function(a){var b=a||cc._renderContext;if(this._visible){cc.kmGLPushMatrix();var c=this.grid;c&&c.isActive()&&(c.beforeDraw(),this.transformAncestors()),this.sortAllChildren(),this.transform(b),this.draw(b),c&&c.isActive()&&c.afterDraw(this),cc.kmGLPopMatrix(),this.arrivalOrder=0}},addChild:null,_addChildForCanvas:function(a,b,c){return cc.assert(null!=a,cc._LogInfos.CCSpriteBatchNode_addChild_3),a instanceof cc.Sprite?(b=null==b?a.zIndex:b,c=null==c?a.tag:c,cc.Node.prototype.addChild.call(this,a,b,c),this.appendChild(a),void this.setNodeDirty()):void cc.log(cc._LogInfos.CCSpriteBatchNode_addChild)},_addChildForWebGL:function(a,b,c){return cc.assert(null!=a,cc._LogInfos.Sprite_addChild_6),a instanceof cc.Sprite?a.texture!=this.textureAtlas.texture?void cc.log(cc._LogInfos.Sprite_addChild_5):(b=null==b?a.zIndex:b,c=null==c?a.tag:c,cc.Node.prototype.addChild.call(this,a,b,c),this.appendChild(a),void this.setNodeDirty()):void cc.log(cc._LogInfos.Sprite_addChild_4)},removeAllChildren:null,_removeAllChildrenForCanvas:function(a){var b=this._descendants;if(b&&b.length>0)for(var c=0,d=b.length;d>c;c++)b[c]&&(b[c].batchNode=null);cc.Node.prototype.removeAllChildren.call(this,a),this._descendants.length=0},_removeAllChildrenForWebGL:function(a){var b=this._descendants;if(b&&b.length>0)for(var c=0,d=b.length;d>c;c++)b[c]&&(b[c].batchNode=null);cc.Node.prototype.removeAllChildren.call(this,a),this._descendants.length=0,this.textureAtlas.removeAllQuads()},sortAllChildren:null,_sortAllChildrenForCanvas:function(){if(this._reorderChildDirty){var a,b,c=0,d=this._children,e=d.length;for(a=1;e>a;a++){var f=d[a];for(c=a-1,b=d[c];c>=0&&(f._localZOrder<b._localZOrder||f._localZOrder==b._localZOrder&&f.arrivalOrder<b.arrivalOrder);)d[c+1]=b,c-=1,b=d[c];d[c+1]=f}d.length>0&&this._arrayMakeObjectsPerformSelector(d,cc.Node._StateCallbackType.sortAllChildren),this._reorderChildDirty=!1}},_sortAllChildrenForWebGL:function(){if(this._reorderChildDirty){var a,b,c=this._children,d=0,e=c.length;for(a=1;e>a;a++){var f=c[a];for(d=a-1,b=c[d];d>=0&&(f._localZOrder<b._localZOrder||f._localZOrder==b._localZOrder&&f.arrivalOrder<b.arrivalOrder);)c[d+1]=b,d-=1,b=c[d];c[d+1]=f}if(c.length>0){this._arrayMakeObjectsPerformSelector(c,cc.Node._StateCallbackType.sortAllChildren);var g=0;for(a=0;a<c.length;a++)g=this._updateAtlasIndex(c[a],g)}this._reorderChildDirty=!1}},draw:null,_drawForWebGL:function(){0!==this.textureAtlas.totalQuads&&(this._shaderProgram.use(),this._shaderProgram.setUniformForModelViewAndProjectionMatrixWithMat4(),this._arrayMakeObjectsPerformSelector(this._children,cc.Node._StateCallbackType.updateTransform),cc.glBlendFunc(this._blendFunc.src,this._blendFunc.dst),this.textureAtlas.drawQuads())}});var _p=cc.SpriteBatchNode.prototype;cc._renderType===cc._RENDER_TYPE_WEBGL?(_p.ctor=_p._ctorForWebGL,_p.updateQuadFromSprite=_p._updateQuadFromSpriteForWebGL,_p.insertQuadFromSprite=_p._insertQuadFromSpriteForWebGL,_p.initWithTexture=_p._initWithTextureForWebGL,_p.appendChild=_p._appendChildForWebGL,_p.removeSpriteFromAtlas=_p._removeSpriteFromAtlasForWebGL,_p.getTexture=_p._getTextureForWebGL,_p.setTexture=_p._setTextureForWebGL,_p.visit=_p._visitForWebGL,_p.addChild=_p._addChildForWebGL,_p.removeAllChildren=_p._removeAllChildrenForWebGL,_p.sortAllChildren=_p._sortAllChildrenForWebGL,_p.draw=_p._drawForWebGL):(_p.ctor=_p._ctorForCanvas,_p.updateQuadFromSprite=_p._updateQuadFromSpriteForCanvas,_p.insertQuadFromSprite=_p._insertQuadFromSpriteForCanvas,_p.initWithTexture=_p._initWithTextureForCanvas,_p.appendChild=_p._appendChildForCanvas,_p.removeSpriteFromAtlas=_p._removeSpriteFromAtlasForCanvas,_p.getTexture=_p._getTextureForCanvas,_p.setTexture=_p._setTextureForCanvas,_p.visit=_p._visitForCanvas,_p.removeAllChildren=_p._removeAllChildrenForCanvas,_p.addChild=_p._addChildForCanvas,_p.sortAllChildren=_p._sortAllChildrenForCanvas,_p.draw=cc.Node.prototype.draw),cc.defineGetterSetter(_p,"texture",_p.getTexture,_p.setTexture),_p.descendants,cc.defineGetterSetter(_p,"descendants",_p.getDescendants),cc.SpriteBatchNode.create=function(a,b){return new cc.SpriteBatchNode(a,b)},cc.SpriteBatchNode.createWithTexture=cc.SpriteBatchNode.create;