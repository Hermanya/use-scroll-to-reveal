(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(4),o=t.n(a),l=(t(20),t(2)),u=function(e){var n=Object(r.useState)(!1),t=n[0],c=n[1];return Object(r.useEffect)(function(){var n=new IntersectionObserver(function(e){e[0].isIntersecting&&c(!0)});return n.observe(e.current),function(){n.disconnect()}},[]),t},i=t(3),s=t(8);function f(){var e=Object(l.a)(["\ncolor: white;\nmargin: 0.5em;\n"]);return f=function(){return e},e}function m(){var e=Object(l.a)(["animation: 1s ",""]);return m=function(){return e},e}function d(){var e=Object(l.a)(["\n  color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 101vh;\n  background: hsl(",", 50%, 50%);\n  ","\n"]);return d=function(){return e},e}function v(){var e=Object(l.a)(["",""]);return v=function(){return e},e}var p=Object(i.c)(v(),s.fadeIn),b=i.b.section(d(),function(e){var n=e.hue;return void 0===n?0:n},function(e){return e.revealed&&Object(i.a)(m(),p)}),h=function(e){var n=Object(r.useRef)(),t=u(n);return c.a.createElement(b,Object.assign({revealed:t,ref:n},e))},E=i.b.a(f()),w=function(){return c.a.createElement("div",null,c.a.createElement(h,null,c.a.createElement("pre",null,c.a.createElement("code",null,"npm install use-scroll-to-reveal")),c.a.createElement("pre",null,c.a.createElement("code",null,"yarn add use-scroll-to-reveal"))),c.a.createElement(h,{hue:120},c.a.createElement("pre",null,c.a.createElement("code",null,"\n// example with styled-components and react-animations\nconst StyledSection = styled.section`\n  // ... your styles\n  ${({revealed}) => revealed && css`animation: 1s ${animation}`}\n`;\nconst MySection = (props) => {\n  const ref = useRef()\n  const revealed = useMyHook(ref)\n  return <StyledSection revealed={revealed} ref={ref} {...props}/>\n}"))),c.a.createElement(h,{hue:240},c.a.createElement(E,{href:"https://github.com/Hermanya/use-scroll-to-reveal"},"github"),c.a.createElement(E,{href:"https://www.npmjs.com/package/use-scroll-to-reveal"},"npm")))};o.a.render(c.a.createElement(w,null),document.getElementById("root"))},12:function(e,n,t){e.exports=t(105)},20:function(e,n,t){}},[[12,2,1]]]);
//# sourceMappingURL=main.8ea8352b.chunk.js.map