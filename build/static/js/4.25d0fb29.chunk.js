(this.webpackJsonpt1=this.webpackJsonpt1||[]).push([[4],{48:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(21),r=a(17),l=a(18),s=a(22),m=a(19),o=a(23),i=a(0),c=a.n(i),u=a(20);a(48);function p(e){var t=e.changeHandler,a=e.value,n=e.placeholder,r=e.name,l=e.cl,s=e.validator,m=e.error,o=e.setRef;if(a)var i=c.a.createElement("span",{className:"placeholder"},n);return c.a.createElement("div",{className:l+" input-box "+(a?"filled ":"")+(m?"with-error ":"")},i,c.a.createElement("input",{ref:o,name:r,type:"text",placeholder:n,onFocus:function(e){e.target.placeholder="",console.log(e.target)},onBlur:function(e){e.target.placeholder=n,t(e.target.value),s(e.target)},defaultValue:a}))}function d(e){var t=e.themes,a=e.opened,n=e.toggle,r=e.select,l=e.theme,s=e.validator,m=e.error,o=function(e,t){r(e),s(t)};if(a)var i=t.map((function(e,t){return c.a.createElement(h,{key:t,theme:e,select:o})})),u=c.a.createElement("div",{className:"custom-select-dropdown"},i);else u="";return c.a.createElement("div",{className:"select-box mt-2"},c.a.createElement("div",{className:"input-box "+(m?"with-error ":"")+(l?"filled ":"")},c.a.createElement(f,{opened:a,toggle:n,theme:l}),u))}function f(e){var t=e.opened,a=e.toggle,n=e.theme;if(n&&n.value)var r=c.a.createElement("div",{className:"selected-item"},c.a.createElement("span",{className:"placeholder"},"\u0422\u0435\u043c\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"),n.name);else r="\u0422\u0435\u043c\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f";return c.a.createElement("div",{className:"custom-select-area "+(t?"open":""),onClick:a},r)}function h(e){var t=e.theme,a=e.select,n={name:"theme",value:t.value};return c.a.createElement("div",{className:"custom-select-option",value:t.value,onClick:function(e){return a(t.value,n)}},t.name)}function v(e){var t=e.changeHandler,a=e.value,n=e.validator,r=e.error,l=e.setRef;return c.a.createElement("div",{className:"input-box mt-2 "+(r?"with-error ":"")+(a?"filled ":"")},c.a.createElement("textarea",{ref:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",rows:"4",onFocus:function(e){e.target.placeholder=""},onBlur:function(e){e.target.placeholder="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",t(e.target.value),n(e.target)},name:"message",defaultValue:a}))}var g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).validateField=function(e){var t=e.name,n=e.value,r=a.state.errors;switch(t){case"name":r.name=n?"":"empty";break;case"email":RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(n)?r.email="":r.email="invalid";break;case"theme":r.theme=n?"":"empty";case"message":r.message=n?"":"empty"}a.setState({errors:r})},a.submit=function(e){var t=a.props,n=t.name,r=t.email,l=t.theme,s=t.message,m=a.state.errors;n||(m.name="empty"),r||(m.email="empty"),l||(m.theme="empty"),s||(m.message="empty"),m.name||m.email||m.theme||m.message?e.preventDefault():a.props.submitForm(),a.setState({errors:m})},a.resetForm=function(){a.props.resetForm(),console.log("resetting"),a.inputName.value="",a.inputEmail.value="",a.inputMessage.value=""},a.state={errors:{name:"",email:"",message:"",theme:""},formIsReady:!1},a.setInputNameRef=function(e){a.inputName=e},a.setInputEmailRef=function(e){a.inputEmail=e},a.setInputMessageRef=function(e){a.inputMessage=e},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.themes,a=e.themesMenuOpened,n=e.theme,r=e.name,l=e.email,s=e.message,m=e.toggleThemesMenu,o=e.selectTheme,i=e.inputName,f=e.inputMail,h=e.inputMessage,g=this.state.errors;return console.log("form page props",this.props),console.log("form page state",this.state),c.a.createElement("div",{className:"form-page"},c.a.createElement("div",{className:"form-card"},c.a.createElement("div",{className:"form-card-body"},c.a.createElement("form",null,c.a.createElement("h2",{className:"form-title"},"\u0424\u043e\u0440\u043c\u0430 \u0434\u043b\u044f \u0442\u0435\u0431\u044f"),c.a.createElement(p,{changeHandler:i,value:r,placeholder:"\u041f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u044c\u0442\u0435\u0441\u044c \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430",name:"name",validator:this.validateField,error:g.name,setRef:this.setInputNameRef}),c.a.createElement(p,{changeHandler:f,value:l,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448 e-mail",name:"email",cl:"mt-2",validator:this.validateField,error:g.email,setRef:this.setInputEmailRef}),c.a.createElement(d,{themes:t,opened:a,toggle:m,select:o,theme:n,error:g.theme,validator:this.validateField}),c.a.createElement(v,{changeHandler:h,value:s,validator:this.validateField,error:g.message,setRef:this.setInputMessageRef}),c.a.createElement("div",{className:"form-footer mt-2"},c.a.createElement("div",{className:"button reset-button",onClick:this.resetForm},"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"),c.a.createElement(u.b,{onClick:this.submit,to:"/",className:"button ml-auto"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))))}}]),t}(c.a.Component),E=Object(n.b)((function(e){return e.form}),(function(e){return{toggleThemesMenu:function(){e({type:"TOGGLE_THEMES_MENU"})},selectTheme:function(t){e({type:"SELECT_THEME",value:t})},inputName:function(t){e({type:"INPUT_NAME",name:t})},inputMail:function(t){e({type:"INPUT_EMAIL",email:t})},inputMessage:function(t){e({type:"INPUT_MESSAGE",message:t})},resetForm:function(){e({type:"RESET_FORM"})},submitForm:function(){e({type:"SUBMIT_FORM"})}}}))(g);t.default=E}}]);
//# sourceMappingURL=4.25d0fb29.chunk.js.map