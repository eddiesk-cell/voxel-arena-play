import{N as e,gt as t,it as n,o as r}from"./three.core-CWs1dV2C.js";var i=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},a=new t(-1,1,1,-1,0,1),o=new class extends r{constructor(){super(),this.setAttribute(`position`,new e([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new e([0,2,0,0,2,0],2))}},s=class{constructor(e){this._mesh=new n(o,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},c={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};export{s as n,i as r,c as t};