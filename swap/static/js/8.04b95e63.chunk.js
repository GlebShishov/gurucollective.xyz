(window.webpackJsonpuniswap=window.webpackJsonpuniswap||[]).push([[8],{982:function(e,t,n){"use strict";var r=n(38),a=n(46),i=n(44),u=n(20),c=n(43),l=n(127),o=n(3),s=n(0),f=n.n(s),m=n(4),b=n(980),d=n(978);function p(){var e=Object(o.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return p=function(){return e},e}function h(){var e=Object(o.a)(["\n  path {\n    stroke: ",";\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(o.a)(["\n  ",";\n  color: ",";\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n\n  span {\n    margin-right: 12px;\n  }\n\n  img {\n    height: 0.75rem;\n    width: 0.75rem;\n  }\n"]);return v=function(){return e},e}function g(){var e=Object(o.a)(["\n  background-color: ",";\n  padding: 1.5rem;\n  border-radius: 1rem;\n  font-size: 0.75rem;\n  margin-top: 1rem;\n"]);return g=function(){return e},e}function E(){var e=Object(o.a)(["\n  color: ",";\n  font-size: 0.75rem;\n  text-align: center;\n  margin-top: 1rem;\n  padding-top: 1rem;\n"]);return E=function(){return e},e}var y=m.d.div(E(),function(e){var t=e.error,n=e.theme;return t?n.salmonRed:n.doveGray}),O=m.d.div(g(),function(e){return e.theme.concreteGray}),j=m.d.div(v(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.royalBlue}),w=Object(m.d)(function(e){e.isError,e.highSlippageWarning;var t=Object(l.a)(e,["isError","highSlippageWarning"]);return f.a.createElement(b.a,t)})(h(),function(e){return e.theme.royalBlue}),N=Object(m.d)(function(e){e.isError,e.highSlippageWarning;var t=Object(l.a)(e,["isError","highSlippageWarning"]);return f.a.createElement(d.a,t)})(p(),function(e){return e.theme.royalBlue}),T=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={showDetails:!1},n}return Object(c.a)(t,e),Object(a.a)(t,[{key:"renderDetails",value:function(){return this.state.showDetails?f.a.createElement(O,null,this.props.renderTransactionDetails()):null}},{key:"render",value:function(){var e=this,t=this.props,n=t.openDetailsText,r=t.closeDetailsText,a=t.contextualInfo,i=t.isError;return a?f.a.createElement(y,{error:i},a):f.a.createElement(f.a.Fragment,null,f.a.createElement(j,{onClick:function(){return e.setState(function(e){return{showDetails:!e.showDetails}})}},this.state.showDetails?f.a.createElement(f.a.Fragment,null,f.a.createElement("span",null,r),f.a.createElement(N,null)):f.a.createElement(f.a.Fragment,null,f.a.createElement("span",null,n),f.a.createElement(w,null))),this.renderDetails())}}]),t}(s.Component);T.defaultProps={openDetailsText:"Advanced Details",closeDetailsText:"Hide Advanced",renderTransactionDetails:function(){},contextualInfo:"",isError:!1},t.a=T},994:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),i=n(27),u=n(7),c=n(1),l=n(127),o=n(3),s=n(0),f=n.n(s),m=n(61),b=n(10),d=n(12),p=n(128),h=n(4),v=n(18),g=n(983),E=n(977),y=n(982);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=f.a.createElement("path",{d:"M1 6H6M11 6L6 6M6 1V6M6 6L6 11",stroke:"#2F80ED",strokeLinecap:"round"}),N=function(e){var t=e.svgRef,n=e.title,r=j(e,["svgRef","title"]);return f.a.createElement("svg",O({width:12,height:12,viewBox:"0 0 12 12",fill:"none",ref:t},r),f.a.createElement("title",null,n),w)},T=f.a.forwardRef(function(e,t){return f.a.createElement(N,O({svgRef:t},e))}),D=(n.p,n(72)),x=n(5),k=n(90),P=n(82),A=n(181),S=n(180),U=n(182);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(n,!0).forEach(function(t){Object(c.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function M(){var e=Object(o.a)(["\n  width: 0.625rem;\n  height: 0.625rem;\n  position: relative;\n  padding: 0.875rem;\n  path {\n    stroke: ",";\n  }\n"]);return M=function(){return e},e}function L(){var e=Object(o.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 2rem;\n\n  button {\n    max-width: 20rem;\n  }\n"]);return L=function(){return e},e}function R(){var e=Object(o.a)(["\n  flex: 1 1 auto;\n  width: 0;\n  color: ",";\n"]);return R=function(){return e},e}function W(){var e=Object(o.a)(["\n  ",";\n  align-items: center;\n  color: ",";\n  font-size: 0.75rem;\n  padding: 0.25rem 1rem 0;\n"]);return W=function(){return e},e}function _(){var e=Object(o.a)(["\n  ","\n  padding: 1rem 0;\n"]);return _=function(){return e},e}function H(){var e=Object(o.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return H=function(){return e},e}function z(){var e=Object(o.a)(["\n  margin-top: 1rem;\n"]);return z=function(){return e},e}function B(){var e=Object(o.a)(["\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: center;\n\n  :first-child {\n    padding-bottom: 0.3rem;\n    font-weight: 500;\n  }\n"]);return B=function(){return e},e}function Z(){var e=Object(o.a)(["\n  margin-top: 1rem;\n  padding: 1rem;\n  margin-bottom: 2rem;\n  border: 1px solid rgba($pizazz-orange, 0.4);\n  background-color: rgba($pizazz-orange, 0.1);\n  border-radius: 1rem;\n"]);return Z=function(){return e},e}function F(){var e=Object(o.a)(["\n  color: ",";\n"]);return F=function(){return e},e}n.d(t,"default",function(){return se});var q=0,I=1,G=d.ethers.utils.bigNumberify(200),J=900,Y=d.ethers.utils.bigNumberify(1e3),$=h.d.span(F(),function(e){return e.theme.royalBlue}),K=h.d.div(Z()),Q=h.d.div(B()),X=h.d.div(z()),ee=h.d.div(H(),function(e){return e.theme.flexRowNoWrap}),te=h.d.div(_(),function(e){return e.theme.flexColumnNoWrap}),ne=h.d.div(W(),function(e){return e.theme.flexRowNoWrap},function(e){return e.theme.doveGray}),re=h.d.span(R(),function(e){return e.theme.doveGray}),ae=h.d.div(L()),ie=Object(h.d)(function(e){e.isError,e.highSlippageWarning;var t=Object(l.a)(e,["isError","highSlippageWarning"]);return f.a.createElement(T,t)})(M(),function(e){var t=e.active,n=e.theme;return t?n.royalBlue:n.chaliceGray});function ue(e){if(e){var t=e.mul(G).div(d.ethers.utils.bigNumberify(1e4)),n=e.sub(t),r=e.add(t);return{minimum:n.lt(d.ethers.constants.Zero)?d.ethers.constants.Zero:n,maximum:r.gt(d.ethers.constants.MaxUint256)?d.ethers.constants.MaxUint256:r}}return{}}var ce={inputValue:"",outputValue:"",lastEditedField:q,outputCurrency:""};function le(e,t){switch(t.type){case"SELECT_CURRENCY":return C({},e,{outputCurrency:t.payload});case"UPDATE_VALUE":var n=e.inputValue,r=e.outputValue,a=t.payload,i=a.field,u=a.value;return C({},e,{inputValue:i===q?u:n,outputValue:i===I?u:r,lastEditedField:i});case"UPDATE_DEPENDENT_VALUE":var c=e.inputValue,l=e.outputValue,o=t.payload,s=o.field,f=o.value;return C({},e,{inputValue:s===q?f:c,outputValue:s===I?f:l});default:return ce}}function oe(e,t,n){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4];try{if(e&&(t||0===t)&&n&&(r||0===r)){var i=d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18));return a?e.mul(i).div(n).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))):n.mul(i).div(e).mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(t))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(r)))}}catch(u){}}(e,18,t,n,arguments.length>3&&void 0!==arguments[3]&&arguments[3])}function se(){var e=Object(m.b)().t,t=Object(b.useWeb3Context)(),n=t.library,r=t.active,c=t.account,l=Object(s.useReducer)(le,ce),o=Object(u.a)(l,2),h=o[0],O=o[1],j=h.inputValue,w=h.outputValue,N=h.lastEditedField,T=h.outputCurrency,V="ETH",C=Object(s.useState)(),M=Object(u.a)(C,2),L=M[0],R=M[1],W=Object(s.useState)(),_=Object(u.a)(W,2),H=_[0],z=_[1],B=Object(s.useState)(),Z=Object(u.a)(B,2),F=Z[0],G=Z[1],se=Object(s.useState)(),fe=Object(u.a)(se,2),me=fe[0],be=fe[1],de=Object(P.c)(T),pe=de.symbol,he=de.decimals,ve=de.exchangeAddress,ge=Object(D.e)(ve),Ee=Object(s.useState)(),ye=Object(u.a)(Ee,2),Oe=ye[0],je=ye[1],we=Object(s.useCallback)(function(){ge&&ge.totalSupply().then(function(e){je(e)})},[ge]);Object(s.useEffect)(function(){return we(),n.on("block",we),function(){n.removeListener("block",we)}},[we,n]);var Ne=Object(S.b)(c,ve),Te=Object(S.b)(ve,"ETH"),De=Object(S.b)(ve,T),xe=Object(S.c)(T),ke=xe.reserveETH,Pe=xe.reserveToken,Ae=!!(ke&&Pe&&ke.isZero()&&Pe.isZero()),Se=Ne&&Oe&&!1===Ae&&!Oe.isZero()?Ne.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(Oe):void 0,Ue=Te&&Se?Te.mul(Se).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,Ve=De&&Se?De.mul(Se).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))):void 0,Ce=Ae?L:Oe&&L&&Te&&!Te.isZero()?Oe.mul(L).div(Te):void 0,Me=Object(S.b)(c,V),Le=Object(S.b)(c,T),Re=Te&&Oe&&!1===Ae&&!Oe.isZero()?Te.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(Oe):void 0,We=De&&Oe&&!1===Ae&&!Oe.isZero()?De.mul(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(Oe):void 0,_e=H&&ue(H).maximum,He=Ce&&ue(Ce).minimum,ze=Object(s.useMemo)(function(){return oe(ke,Pe,he)},[ke,Pe,he]),Be=Object(s.useMemo)(function(){return oe(ke,Pe,he,!0)},[ke,Pe,he]);function Ze(){p.a.event({category:"TransactionDetail",action:"Open"});var t=function(e){return f.a.createElement($,null,e)};return Ae?f.a.createElement("div",null,f.a.createElement("div",null,e("youAreAdding")," ",t("".concat(j," ETH"))," ",e("and")," ",t("".concat(w," ").concat(pe))," ",e("intoPool")),f.a.createElement(X,null,e("youAreSettingExRate")," ",t("1 ETH = ".concat(Object(x.a)(oe(L,H,he),18,4,!1)," ").concat(pe)),"."),f.a.createElement(X,null,e("youWillMint")," ",t("".concat(j))," ",e("liquidityTokens")),f.a.createElement(X,null,e("totalSupplyIs0"))):f.a.createElement(f.a.Fragment,null,f.a.createElement("div",null,e("youAreAdding")," ",t("".concat(Object(x.a)(L,18,4)," ETH"))," ",e("and")," ","at most"," ",t("".concat(Object(x.a)(_e,he,Math.min(he,4))," ").concat(pe))," ",e("intoPool")),f.a.createElement(X,null,e("youWillMint")," ",t(Object(x.a)(Ce,18,4))," ",e("liquidityTokens")),f.a.createElement(X,null,e("totalSupplyIs")," ",t(Object(x.a)(Oe,18,4))),f.a.createElement(X,null,e("tokenWorth")," ",t(Object(x.a)(Re,18,4))," ETH ",e("and")," ",t(Object(x.a)(We,he,Math.min(he,4)))," ",pe))}var Fe=Object(k.e)();function qe(){return(qe=Object(i.a)(a.a.mark(function e(){var t,n,r;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p.a.event({category:"Pool",action:"AddLiquidity"}),t=Math.ceil(Date.now()/1e3)+J,e.next=4,ge.estimate.addLiquidity(Ae?d.ethers.constants.Zero:He,Ae?H:_e,t,{value:L});case 4:n=e.sent,r=Object(x.b)(n,Y),ge.addLiquidity(Ae?d.ethers.constants.Zero:He,Ae?H:_e,t,{value:L,gasLimit:r}).then(function(e){Fe(e)});case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ie(e){return"Balance: ".concat(e)}Object(s.useEffect)(function(){if(Ae){if(j){var e=d.ethers.utils.parseUnits(j,18);R(e)}if(w){var t=d.ethers.utils.parseUnits(w,he);z(t)}}},[he,j,Ae,w]),Object(s.useEffect)(function(){if(!1===Ae&&j&&ze&&N===q&&(he||0===he))try{var t=d.ethers.utils.parseUnits(j,18);if(t.lte(d.ethers.constants.Zero)||t.gte(d.ethers.constants.MaxUint256))throw Error();R(t);var n=ze.mul(t).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18))).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(18-he)));return z(n),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:I,value:Object(x.a)(n,he,Math.min(he,4),!1)}}),function(){be(),R(),z(),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:I,value:""}})}}catch(r){be(e("inputNotValid"))}},[j,Ae,N,ze,he,e]),Object(s.useEffect)(function(){if(!1===Ae&&w&&Be&&N===I&&(he||0===he))try{var t=d.ethers.utils.parseUnits(w,he);if(t.lte(d.ethers.constants.Zero)||t.gte(d.ethers.constants.MaxUint256))throw Error();z(t);var n=Be.mul(t).div(d.ethers.utils.bigNumberify(10).pow(d.ethers.utils.bigNumberify(he)));return R(n),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:q,value:Object(x.a)(n,18,4,!1)}}),function(){G(),z(),R(),O({type:"UPDATE_DEPENDENT_VALUE",payload:{field:q,value:""}})}}catch(r){G(e("inputNotValid"))}},[w,Ae,N,Be,he,e]),Object(s.useEffect)(function(){L&&Me&&(L.gt(Me)?G(e("insufficientBalance")):G(null)),_e&&Le&&(_e.gt(Le)?be(e("insufficientBalance")):be(null))},[L,Me,_e,Le,e]);var Ge=Object(U.b)(c,T,ve),Je=Object(s.useState)(!1),Ye=Object(u.a)(Je,2),$e=Ye[0],Ke=Ye[1];Object(s.useEffect)(function(){if(H&&Ge)return Ge.lt(H)&&(be(e("unlockTokenCont")),Ke(!0)),function(){be(),Ke(!1)}},[H,Ge,e]);var Qe=r&&c,Xe=(null===F||null===me)&&!$e,et=Object(A.b)();return f.a.createElement(f.a.Fragment,null,Ae?f.a.createElement(K,null,f.a.createElement(Q,null,f.a.createElement("span",{role:"img","aria-label":"first-liquidity"},"\ud83d\udeb0")," ",e("firstLiquidity")),f.a.createElement(Q,null,e("initialExchangeRate",{symbol:pe}))):null,f.a.createElement(g.a,{title:e("deposit"),allBalances:et,extraText:Me&&Ie(Object(x.a)(Me,18,4)),onValueChange:function(e){O({type:"UPDATE_VALUE",payload:{value:e,field:q}})},selectedTokenAddress:"ETH",value:j,errorMessage:F,disableTokenSelect:!0}),f.a.createElement(E.a,null,f.a.createElement(ee,null,f.a.createElement(ie,{active:Qe,alt:"plus"}))),f.a.createElement(g.a,{title:e("deposit"),allBalances:et,description:Ae?"":w?"(".concat(e("estimated"),")"):"",extraText:Le&&Ie(Object(x.a)(Le,he,Math.min(he,4))),selectedTokenAddress:T,onCurrencySelected:function(e){O({type:"SELECT_CURRENCY",payload:e})},onValueChange:function(e){O({type:"UPDATE_VALUE",payload:{value:e,field:I}})},value:w,showUnlock:$e,errorMessage:me}),f.a.createElement(E.a,{hideBottom:!0},f.a.createElement(te,null,f.a.createElement(ne,null,f.a.createElement(re,null,e("exchangeRate")),f.a.createElement("span",null,ze?"1 ETH = ".concat(Object(x.a)(ze,18,4)," ").concat(pe):" - ")),f.a.createElement(ne,null,f.a.createElement(re,null,e("currentPoolSize")),f.a.createElement("span",null,Te&&De?"".concat(Object(x.a)(Te,18,4)," ETH + ").concat(Object(x.a)(De,he,Math.min(4,he))," ").concat(pe):" - ")),f.a.createElement(ne,null,f.a.createElement(re,null,e("yourPoolShare")," (",Te&&Object(x.a)(Se,16,2),"%)"),f.a.createElement("span",null,Ue&&Ve?"".concat(Object(x.a)(Ue,18,4)," ETH + ").concat(Object(x.a)(Ve,he,Math.min(4,he))," ").concat(pe):" - ")))),function(){var t="",n=!1;return F||me?(t=F||me,n=!0):V&&T?j?c||(t=e("noWallet"),n=!0):t=e("enterValueCont"):t=e("selectTokenCont"),f.a.createElement(y.a,{openDetailsText:e("transactionDetails"),closeDetailsText:e("hideDetails"),contextualInfo:t,isError:n,renderTransactionDetails:Ze})}(),f.a.createElement(ae,null,f.a.createElement(v.b,{disabled:!Xe,onClick:function(){return qe.apply(this,arguments)}},e("addLiquidity"))))}}}]);
//# sourceMappingURL=8.04b95e63.chunk.js.map