(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"AVb+":function(l,e,n){"use strict";n.d(e,"a",(function(){return s}));var u=n("lJxs"),t=(n("hs0U"),n("kcl6")),i=n("8Y7J");let s=(()=>{class l{constructor(l,e,n,u,t,i,s,a,r){this.groupGql=l,this.groupsGql=e,this.groupsByModuleGql=n,this.createGroupGql=u,this.groupTotalGql=t,this.remainingStudentsGql=i,this.groupExistsGql=s,this.updateGroupGql=a,this.deleteGroupGql=r}group(l){return this.groupGql.watch({id:l},{pollInterval:1e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}groups(){return this.groupsGql.watch({},{pollInterval:1e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}groupsByModule(l){return this.groupsByModuleGql.watch({moduleId:l},{pollInterval:1e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}groupTotal(l){return this.groupTotalGql.watch({moduleId:l},{pollInterval:1e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}remainingStudents(l){return this.remainingStudentsGql.watch({moduleId:l},{pollInterval:1e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}groupExists(l,e){return this.groupExistsGql.watch({groupId:l,moduleId:e},{pollInterval:1e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}createGroup(l){return this.createGroupGql.mutate({group:l}).pipe(Object(u.a)(l=>l,l=>l))}updateGroup(l){return this.updateGroupGql.mutate({group:l}).pipe(Object(u.a)(l=>l,l=>l))}deleteGroup(l){return this.deleteGroupGql.mutate({group:l}).pipe(Object(u.a)(l=>l,l=>l))}}return l.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new l(i["\u0275\u0275inject"](t.Pb),i["\u0275\u0275inject"](t.Sb),i["\u0275\u0275inject"](t.Rb),i["\u0275\u0275inject"](t.J),i["\u0275\u0275inject"](t.Qb),i["\u0275\u0275inject"](t.lc),i["\u0275\u0275inject"](t.Ob),i["\u0275\u0275inject"](t.Ic),i["\u0275\u0275inject"](t.T))},token:l,providedIn:"root"}),l})()},AcEf:function(l,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a}));var u=n("8Y7J"),t=(n("T+K8"),n("SVse")),i=(n("s7LF"),u["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,4,"label",[],[[1,"for",0]],[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onClick(n,u["\u0275nov"](l.parent,7),!0)&&t),t}),null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](3,{"ui-chkbox-label":0,"ui-label-active":1,"ui-label-disabled":2,"ui-label-focus":3}),(l()(),u["\u0275ted"](4,null,["",""]))],(function(l,e){var n=e.component,u=n.labelStyleClass,t=l(e,3,0,!0,n.checked,n.disabled,n.focused);l(e,2,0,u,t)}),(function(l,e){var n=e.component;l(e,0,0,n.inputId),l(e,4,0,n.label)}))}function a(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,17,"div",[],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](3,{"ui-chkbox ui-widget":0,"ui-chkbox-readonly":1}),u["\u0275prd"](512,null,t["\u0275NgStyleImpl"],t["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](5,278528,null,0,t.NgStyle,[t["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),u["\u0275eld"](6,0,null,null,4,"div",[["class","ui-helper-hidden-accessible"]],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,[["cb",1]],null,3,"input",[["type","checkbox"]],[[1,"id",0],[8,"name",0],[8,"readOnly",0],[8,"value",0],[8,"checked",0],[8,"disabled",0],[1,"tabindex",0]],[[null,"focus"],[null,"blur"],[null,"change"]],(function(l,e,n){var u=!0,t=l.component;return"focus"===e&&(u=!1!==t.onFocus(n)&&u),"blur"===e&&(u=!1!==t.onBlur(n)&&u),"change"===e&&(u=!1!==t.handleChange(n)&&u),u}),null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](9,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),u["\u0275pod"](10,{"ui-state-focus":0}),(l()(),u["\u0275eld"](11,0,null,null,6,"div",[["class","ui-chkbox-box ui-widget ui-corner-all ui-state-default"]],null,[[null,"click"]],(function(l,e,n){var t=!0;return"click"===e&&(t=!1!==l.component.onClick(n,u["\u0275nov"](l,7),!0)&&t),t}),null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](13,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](14,{"ui-state-active":0,"ui-state-disabled":1,"ui-state-focus":2}),(l()(),u["\u0275eld"](15,0,null,null,2,"span",[["class","ui-chkbox-icon ui-clickable"]],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](17,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,s)),u["\u0275did"](19,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component,u=n.styleClass,t=l(e,3,0,!0,n.readonly);l(e,2,0,u,t),l(e,5,0,n.style);var i=l(e,10,0,n.focused);l(e,9,0,i);var s=l(e,14,0,n.checked,n.disabled,n.focused);l(e,13,0,"ui-chkbox-box ui-widget ui-corner-all ui-state-default",s),l(e,17,0,"ui-chkbox-icon ui-clickable",n.checked?n.checkboxIcon:null),l(e,19,0,n.label)}),(function(l,e){var n=e.component;l(e,7,0,n.inputId,n.name,n.readonly,n.value,n.checked,n.disabled,n.tabindex)}))}},FRvf:function(l,e,n){"use strict";n.d(e,"a",(function(){return s}));var u=n("lJxs"),t=(n("hs0U"),n("8Y7J")),i=n("kcl6");let s=(()=>{class l{constructor(l,e,n,u,t,i){this.formalInstructionActivityGql=l,this.formalInstructionActivitiesGql=e,this.formalInstructionActivitiesByUserGql=n,this.addformalInstructionActivityGql=u,this.editformalInstructionActivityGql=t,this.deleteformalInstructionActivityGql=i}formalInstructionActivity(l){return this.formalInstructionActivityGql.watch({activityId:l},{pollInterval:2e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}formalInstructionActivities(){return this.formalInstructionActivitiesGql.watch({},{pollInterval:2e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}formalInstructionActivitiesByUser(l){return this.formalInstructionActivitiesByUserGql.watch({userId:l},{pollInterval:2e3}).valueChanges.pipe(Object(u.a)(l=>l,l=>l))}addFormalInstructionActivity(l){return this.addformalInstructionActivityGql.mutate({activity:l}).pipe(Object(u.a)(l=>l,l=>l))}editFormalInstructionActivity(l){return this.editformalInstructionActivityGql.mutate({activity:l}).pipe(Object(u.a)(l=>l,l=>l))}deleteFormalInstructionActivity(l){return this.deleteformalInstructionActivityGql.mutate({activity:l}).pipe(Object(u.a)(l=>l,l=>l))}}return l.ngInjectableDef=t["\u0275\u0275defineInjectable"]({factory:function(){return new l(t["\u0275\u0275inject"](i.Mb),t["\u0275\u0275inject"](i.Lb),t["\u0275\u0275inject"](i.Kb),t["\u0275\u0275inject"](i.o),t["\u0275\u0275inject"](i.sb),t["\u0275\u0275inject"](i.S))},token:l,providedIn:"root"}),l})()},HigS:function(l,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return m}));var u=n("8Y7J"),t=(n("rmC/"),n("SVse")),i=(n("7LN8"),n("s7LF"),u["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function s(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui-widget-header ui-corner-all ui-listbox-header ui-helper-clearfix"]],null,null,null,null,null)),u["\u0275ncd"](null,0)],null,null)}function a(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,10,"div",[["class","ui-chkbox ui-widget"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,1,"div",[["class","ui-helper-hidden-accessible"]],null,null,null,null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"input",[["readonly","readonly"],["type","checkbox"]],[[8,"checked",0]],[[null,"focus"],[null,"blur"],[null,"keydown.space"]],(function(l,e,n){var u=!0,t=l.component;return"focus"===e&&(u=!1!==t.onHeaderCheckboxFocus()&&u),"blur"===e&&(u=!1!==t.onHeaderCheckboxBlur()&&u),"keydown.space"===e&&(u=!1!==t.toggleAll(n)&&u),u}),null,null)),(l()(),u["\u0275eld"](3,0,[[1,0],["headerchkbox",1]],null,7,"div",[["class","ui-chkbox-box ui-widget ui-corner-all ui-state-default"]],null,[[null,"click"]],(function(l,e,n){var u=!0;return"click"===e&&(u=!1!==l.component.toggleAll(n)&&u),u}),null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](5,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](6,{"ui-state-active":0,"ui-state-focus":1}),(l()(),u["\u0275eld"](7,0,null,null,3,"span",[["class","ui-chkbox-icon ui-clickable"]],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](9,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](10,{"pi pi-check":0})],(function(l,e){var n=e.component,u=l(e,6,0,n.allChecked,n.headerCheckboxFocus);l(e,5,0,"ui-chkbox-box ui-widget ui-corner-all ui-state-default",u);var t=l(e,10,0,n.allChecked);l(e,9,0,"ui-chkbox-icon ui-clickable",t)}),(function(l,e){l(e,2,0,e.component.allChecked)}))}function r(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,2,"div",[["class","ui-listbox-filter-container"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,0,"input",[["class","ui-inputtext ui-widget ui-state-default ui-corner-all"],["role","textbox"],["type","text"]],[[8,"value",0],[8,"disabled",0],[1,"aria-label",0]],[[null,"input"]],(function(l,e,n){var u=!0;return"input"===e&&(u=!1!==l.component.onFilter(n)&&u),u}),null,null)),(l()(),u["\u0275eld"](2,0,null,null,0,"span",[["class","ui-listbox-filter-icon pi pi-search"]],null,null,null,null,null))],null,(function(l,e){var n=e.component;l(e,1,0,n.filterValue||"",n.disabled,n.ariaFilterLabel)}))}function c(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,7,"div",[["class","ui-widget-header ui-corner-all ui-listbox-header ui-helper-clearfix"]],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](3,{"ui-listbox-header-w-checkbox":0}),(l()(),u["\u0275and"](16777216,null,null,1,null,a)),u["\u0275did"](5,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,r)),u["\u0275did"](7,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component,u=l(e,3,0,n.checkbox);l(e,2,0,"ui-widget-header ui-corner-all ui-listbox-header ui-helper-clearfix",u),l(e,5,0,n.checkbox&&n.multiple&&n.showToggleAll),l(e,7,0,n.filter)}),null)}function o(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,8,"div",[["class","ui-chkbox ui-widget"]],null,null,null,null,null)),(l()(),u["\u0275eld"](1,0,null,null,7,"div",[["class","ui-chkbox-box ui-widget ui-corner-all ui-state-default"]],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](3,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](4,{"ui-state-active":0}),(l()(),u["\u0275eld"](5,0,null,null,3,"span",[["class","ui-chkbox-icon ui-clickable"]],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](7,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](8,{"pi pi-check":0})],(function(l,e){var n=e.component,u=l(e,4,0,n.isSelected(e.parent.context.$implicit));l(e,3,0,"ui-chkbox-box ui-widget ui-corner-all ui-state-default",u);var t=l(e,8,0,n.isSelected(e.parent.context.$implicit));l(e,7,0,"ui-chkbox-icon ui-clickable",t)}),null)}function d(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u["\u0275ted"](1,null,["",""]))],null,(function(l,e){l(e,1,0,e.parent.context.$implicit.label)}))}function p(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function f(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,10,"li",[],[[4,"display",null],[1,"tabindex",0],[1,"aria-label",0]],[[null,"click"],[null,"dblclick"],[null,"touchend"],[null,"keydown"]],(function(l,e,n){var u=!0,t=l.component;return"click"===e&&(u=!1!==t.onOptionClick(n,l.context.$implicit)&&u),"dblclick"===e&&(u=!1!==t.onOptionDoubleClick(n,l.context.$implicit)&&u),"touchend"===e&&(u=!1!==t.onOptionTouchEnd(n,l.context.$implicit)&&u),"keydown"===e&&(u=!1!==t.onOptionKeyDown(n,l.context.$implicit)&&u),u}),null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](2,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),u["\u0275pod"](3,{"ui-listbox-item ui-corner-all":0,"ui-state-highlight":1,"ui-state-disabled":2}),(l()(),u["\u0275and"](16777216,null,null,1,null,o)),u["\u0275did"](5,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,d)),u["\u0275did"](7,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,2,null,p)),u["\u0275did"](9,540672,null,0,t.NgTemplateOutlet,[u.ViewContainerRef],{ngTemplateOutletContext:[0,"ngTemplateOutletContext"],ngTemplateOutlet:[1,"ngTemplateOutlet"]},null),u["\u0275pod"](10,{$implicit:0,index:1})],(function(l,e){var n=e.component,u=l(e,3,0,!0,n.isSelected(e.context.$implicit),e.context.$implicit.disabled);l(e,2,0,u),l(e,5,0,n.checkbox&&n.multiple),l(e,7,0,!n.itemTemplate);var t=l(e,10,0,e.context.$implicit,e.context.index);l(e,9,0,t,n.itemTemplate)}),(function(l,e){l(e,0,0,e.component.isItemVisible(e.context.$implicit)?"block":"none",e.context.$implicit.disabled?null:"0",e.context.$implicit.label)}))}function g(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"div",[["class","ui-listbox-footer ui-widget-header ui-corner-all"]],null,null,null,null,null)),u["\u0275ncd"](null,1)],null,null)}function m(l){return u["\u0275vid"](0,[u["\u0275qud"](671088640,1,{headerCheckboxViewChild:0}),(l()(),u["\u0275eld"](1,0,null,null,19,"div",[],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgClassImpl"],t["\u0275NgClassR2Impl"],[u.IterableDiffers,u.KeyValueDiffers,u.ElementRef,u.Renderer2]),u["\u0275did"](3,278528,null,0,t.NgClass,[t["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),u["\u0275pod"](4,{"ui-listbox ui-inputtext ui-widget ui-widget-content ui-corner-all":0,"ui-state-disabled":1,"ui-state-focus":2}),u["\u0275prd"](512,null,t["\u0275NgStyleImpl"],t["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](6,278528,null,0,t.NgStyle,[t["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),u["\u0275eld"](7,0,null,null,1,"div",[["class","ui-helper-hidden-accessible"]],null,null,null,null,null)),(l()(),u["\u0275eld"](8,0,null,null,0,"input",[["readonly","readonly"],["type","text"]],null,[[null,"focus"],[null,"blur"]],(function(l,e,n){var u=!0,t=l.component;return"focus"===e&&(u=!1!==t.onInputFocus(n)&&u),"blur"===e&&(u=!1!==t.onInputBlur(n)&&u),u}),null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,s)),u["\u0275did"](10,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,c)),u["\u0275did"](12,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),u["\u0275eld"](13,0,null,null,5,"div",[["class","ui-listbox-list-wrapper"]],null,null,null,null,null)),u["\u0275prd"](512,null,t["\u0275NgStyleImpl"],t["\u0275NgStyleR2Impl"],[u.ElementRef,u.KeyValueDiffers,u.Renderer2]),u["\u0275did"](15,278528,null,0,t.NgStyle,[t["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),(l()(),u["\u0275eld"](16,0,null,null,2,"ul",[["class","ui-listbox-list"]],null,null,null,null,null)),(l()(),u["\u0275and"](16777216,null,null,1,null,f)),u["\u0275did"](18,278528,null,0,t.NgForOf,[u.ViewContainerRef,u.TemplateRef,u.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),u["\u0275and"](16777216,null,null,1,null,g)),u["\u0275did"](20,16384,null,0,t.NgIf,[u.ViewContainerRef,u.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(l,e){var n=e.component,u=n.styleClass,t=l(e,4,0,!0,n.disabled,n.focus);l(e,3,0,u,t),l(e,6,0,n.style),l(e,10,0,n.headerFacet),l(e,12,0,n.checkbox&&n.multiple&&n.showToggleAll||n.filter),l(e,15,0,n.listStyle),l(e,18,0,n.options),l(e,20,0,n.footerFacet)}),null)}},IYfF:function(l,e,n){"use strict";n.d(e,"a",(function(){return s}));var u=n("kcl6"),t=(n("hs0U"),n("lJxs")),i=n("8Y7J");let s=(()=>{class l{constructor(l,e){this.loginGql=l,this.changePasswordGql=e}login(l,e){return this.loginGql.watch({userId:l,password:e}).valueChanges.pipe(Object(t.a)(l=>l,l=>l))}changePassword(l,e,n){return this.changePasswordGql.mutate({userId:l,password:e,newPassword:n}).pipe(l=>l,l=>l)}}return l.ngInjectableDef=i["\u0275\u0275defineInjectable"]({factory:function(){return new l(i["\u0275\u0275inject"](u.Tb),i["\u0275\u0275inject"](u.E))},token:l,providedIn:"root"}),l})()}}]);