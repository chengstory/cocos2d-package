var module={"info":[{"name":"core-extensions","checked":0,"size":"51KB","rule":["core"],"info":"Cocos2d Core extensions"},{"name":"core-webgl","checked":0,"size":"42KB","rule":["core","core-extensions"],"info":"Cocos2d WebGL support"},{"name":"core","checked":1,"size":"239KB","rule":[],"info":"Engine core modules, includes Director, Node, Scene, Layer, Sprite, LabelTTF, EventManger, Scheduler and Texture2D. The default render is canvas."},{"name":"debugger","checked":1,"size":"17KB","rule":["core"],"info":"Log system and debug informations"},{"name":"kazmath","checked":0,"size":"30KB","rule":["core","core-webgl"],"info":"Math lib for webgl"},{"name":"shaders","checked":0,"size":"24KB","rule":["core","core-webgl","kazmath"],"info":"Shaders"},{"name":"render-texture","checked":0,"size":"10KB","rule":["core"],"info":"RenderTexture node for custom rendering"},{"name":"labels","checked":0,"size":"19KB","rule":["core","core-extensions"],"info":"Label nodes including LabelBMFont, LabelAtlas"},{"name":"motion-streak","checked":0,"size":"6KB","rule":["core","core-webgl","shaders","kazmath","labels"],"info":"MotionStreak which can manage a ribbon based on its motion"},{"name":"node-grid","checked":0,"size":"1KB","rule":["core","core-webgl"],"info":"Base node of effects"},{"name":"shape-nodes","checked":0,"size":"16KB","rule":["core"],"info":"DrawNode can be used to render lines, polygons, curves, etc"},{"name":"clipping-nodes","checked":0,"size":"5KB","rule":["core","shape-nodes"],"info":"ClippingNode can clip hosted nodes with shape or texture as stencil"},{"name":"effects","checked":0,"size":"12KB","rule":["core","core-webgl","node-grid"],"info":"Some effects"},{"name":"actions","checked":1,"size":"75KB","rule":["core"],"info":"Configurable actions for animating nodes with position, scale, etc"},{"name":"actions3d","checked":0,"size":"22KB","rule":["core","core-webgl","kazmath","shaders","actions","effects","render-texture"],"info":"Effects that can be applied to nodes, like page turn, shake, wave, etc"},{"name":"progress-timer","checked":0,"size":"15KB","rule":["core","actions"],"info":"ProgressTimer node which can transform a node into a progression bar"},{"name":"transitions","checked":0,"size":"25KB","rule":["core","actions","render-texture","progress-timer"],"info":"Scene transition effects"},{"name":"compression","checked":0,"size":"31KB","rule":["core"],"info":"Compression of tilemap and particle"},{"name":"particle","checked":0,"size":"67KB","rule":["core","compression"],"info":"ParticleSystem node and built in particle effects"},{"name":"text-input","checked":0,"size":"9KB","rule":["core"],"info":"Nodes for simple text inputing"},{"name":"menus","checked":1,"size":"19KB","rule":["core","actions"],"info":"Menu and MenuItem nodes for creating game menu"},{"name":"tilemap","checked":0,"size":"35KB","rule":["core","compression"],"info":"TMX file parser for creating tile map layers"},{"name":"parallax","checked":0,"size":"1KB","rule":["core"],"info":"Parallax effect which can be applied to layers"},{"name":"audio","checked":1,"size":"14KB","rule":["core"],"info":"Audio system"},{"name":"gui","checked":0,"size":"94KB","rule":["core","clipping-nodes","render-texture","actions","progress-timer"],"info":"Another GUI extension with a set of useful widgets"},{"name":"ccbreader","checked":0,"size":"68KB","rule":["core","audio","gui","menus","particle","actions","labels"],"info":"CocosBuilder editor support"},{"name":"editbox","checked":0,"size":"16KB","rule":["core","gui"],"info":"Edit Box for more complex text inputing"},{"name":"ccui","checked":0,"size":"215KB","rule":["core","gui","actions","labels","text-input","clipping-nodes"],"info":"Cocos UI widgets with layout support"},{"name":"cocostudio","checked":0,"size":"163KB","rule":["core","tilemap","particle","shape-nodes","ccui"],"info":"CocoStudio editor support"},{"name":"pluginx","checked":0,"size":"1KB","rule":["core"],"info":"Social network API plugins"},{"name":"physics","checked":0,"size":"5KB","rule":["core","shape-nodes"],"info":"Physics node for Box2d and Chipmunk"},{"name":"socketio","checked":0,"size":"44KB","rule":[],"info":"ScoketIO library support"},{"name":"box2d","checked":0,"size":"232KB","rule":["core","physics"],"info":"Built in box2d physics engine support"},{"name":"chipmunk","checked":0,"size":"56KB","rule":["core","physics"],"info":"Built in Chipmunk physics engine support"},{"name":"spine","checked":0,"size":"39KB","rule":["core"],"info":"The spine support library"},{"name":"ccpool","checked":0,"size":"0KB","rule":["core"],"info":"Sprite recycling pool"}]};
var hiddenList={"core-webgl":0,"core-extensions":1,"kazmath":1,"shaders":1,"node-grid":1,"compression":1,"effects":1,"physics":1};
var _sort=["core-webgl","core","core-extensions","debugger","actions","audio","menus","kazmath","shaders","render-texture","labels","motion-streak","node-grid","shape-nodes","clipping-nodes","effects","actions3d","progress-timer","transitions","compression","particle","text-input","tilemap","parallax","gui","ccbreader","editbox","ccui","cocostudio","ccpool","pluginx","physics","socketio","box2d","chipmunk","spine"];