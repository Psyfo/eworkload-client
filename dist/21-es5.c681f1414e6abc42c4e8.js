(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{SF2F:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),i=u("ZYCi"),s=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function c(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,6,"div",[["class","card"]],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,2,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Formal Instruction Tasks"])),(l()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](6,212992,null,0,i.q,[i.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(l,n){l(n,6,0)},function(l,n){l(n,0,0,void 0)})}function d(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-lecture-tasks",[],null,null,null,c,r)),e["\u0275did"](1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)}var a=e["\u0275ccf"]("app-lecture-tasks",s,d,{},{},[]),p=u("gIcY"),f=u("Ip0R"),m=(u("ZF+8"),u("TwVa")),g=u("kcl6"),v=u("kmKP"),h=u("rlYM"),y=function(){function l(l,n,u,e,t,o,i){this.alertService=l,this.fb=n,this.userGql=u,this.userService=e,this.moduleService=t,this.disciplineService=o,this.venueService=i,this.disciplines=[],this.discipline=new m.d,this.moduleDropdown=!1,this.stackRadio=!1,this.isStacked=!1,this.sharedOptions=["Not Shared","Shared"]}return l.prototype.ngOnInit=function(){this.prepModuleForm=this.fb.group({discipline:["",p.Validators.required],module:["",p.Validators.required]}),this.getUser(),this.getDisciplines(),this.getVenues()},l.prototype.ngOnChanges=function(l){this.getFormData()},l.prototype.buildForm=function(){},l.prototype.initializeForm=function(){},l.prototype.getFormData=function(){this.disciplineId=this.prepModuleForm.get("discipline").value,this.moduleId=this.prepModuleForm.get("module").value,this.getDiscipline(this.disciplineId)},l.prototype.getUser=function(){var l=this;this.userService.currentUser().subscribe(function(n){l.user=n.data.user})},l.prototype.getUsers=function(){var l=this;this.userService.getUsers().subscribe(function(n){l.users=n.data.users.map(function(l){return l})})},l.prototype.getDiscipline=function(l){var n=this;this.disciplineService.getDiscipline(l).subscribe(function(l){n.discipline=l.data.discipline})},l.prototype.getDisciplines=function(){var l=this;this.disciplineService.getDisciplines().subscribe(function(n){l.disciplines=n.data.disciplines.map(function(l){return l})})},l.prototype.getModulesByDiscipline=function(l){var n=this;this.moduleService.getModulesByDiscipline(l).subscribe(function(l){n.modules=l.data.modulesByDiscipline.map(function(l){return l})})},l.prototype.getVenues=function(){},l.prototype.calcGroupSize=function(){return 0},l.prototype.addModules=function(){},l.prototype.getModuleArray=function(){this.moduleArray=this.prepModuleForm.controls.moduleList},l.prototype.addUsers=function(){var l=this.prepModuleForm.controls.usersList;l.push(this.fb.group({userId:""})),console.log(l)},l.prototype.onSelectedDiscipline=function(l){var n=this.prepModuleForm.get("discipline").value;this.getModulesByDiscipline(n),this.moduleDropdown=!0,this.getFormData()},l.prototype.onSelectedModule=function(l){this.stackRadio=!0,this.getFormData()},l.prototype.onSelectedStack=function(l){var n=l.target.id;console.log(n),this.isStacked="stacked"==n},l.prototype.onStacked=function(){},l.prototype.onSharedChanged=function(){},l.prototype.onVenueSelected=function(){},l.prototype.onAdd=function(){},l.prototype.onReset=function(){this.moduleDropdown=!1,this.stackRadio=!1,this.isStacked=!1,this.prepModuleForm.reset()},l}(),C=u("Cmua"),S=u("ZXMZ"),b=u("vMZS"),_=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"routerTransition",definitions:[{type:0,name:"void",styles:{type:6,styles:{},offset:null},options:void 0},{type:0,name:"*",styles:{type:6,styles:{},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateY(100%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(0%)"},offset:null},timings:"0.5s ease-in-out"}],options:null},{type:1,expr:":leave",animation:[{type:6,styles:{transform:"translateY(0%)"},offset:null},{type:4,styles:{type:6,styles:{transform:"translateY(-100%)"},offset:null},timings:"0.5s ease-in-out"}],options:null}],options:{}}]}});function k(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,null,null,null,null)),e["\u0275did"](1,147456,null,0,p.NgSelectOption,[e.ElementRef,e.Renderer2,[2,p.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,[" ",""]))],function(l,n){l(n,1,0,n.context.$implicit.disciplineId),l(n,2,0,n.context.$implicit.disciplineId)},function(l,n){l(n,3,0,null==n.context.$implicit?null:n.context.$implicit.name)})}function F(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"option",[],null,[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onSelectedModule(u)&&e),e},null,null)),e["\u0275did"](1,147456,null,0,p.NgSelectOption,[e.ElementRef,e.Renderer2,[2,p.SelectControlValueAccessor]],{value:[0,"value"]},null),e["\u0275did"](2,147456,null,0,p["\u0275angular_packages_forms_forms_y"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](3,null,["",""]))],function(l,n){l(n,1,0,n.context.$implicit.moduleId),l(n,2,0,n.context.$implicit.moduleId)},function(l,n){l(n,3,0,null==n.context.$implicit?null:n.context.$implicit.name)})}function R(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,67,"div",[],[[24,"@routerTransition",0]],null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,66,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,49,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](3,0,null,null,48,"div",[["class","card"]],null,null,null,null,null)),(l()(),e["\u0275eld"](4,0,null,null,2,"div",[["class","card-header text-muted"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["New Task"])),(l()(),e["\u0275eld"](7,0,null,null,37,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,null,36,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==e["\u0275nov"](l,10).onSubmit(u)&&t),"reset"===n&&(t=!1!==e["\u0275nov"](l,10).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onAdd()&&t),t},null,null)),e["\u0275did"](9,16384,null,0,p["\u0275angular_packages_forms_forms_z"],[],null,null),e["\u0275did"](10,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),e["\u0275did"](12,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(l()(),e["\u0275eld"](13,0,null,null,22,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](14,0,null,null,10,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](15,0,null,null,1,"label",[["for","discipline"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Select a Discipline"])),(l()(),e["\u0275eld"](17,0,null,null,7,"select",[["class","custom-select"],["formControlName","discipline"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,18).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,18).onTouched()&&t),"change"===n&&(t=!1!==o.onSelectedDiscipline(u)&&t),t},null,null)),e["\u0275did"](18,16384,null,0,p.SelectControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,function(l){return[l]},[p.SelectControlValueAccessor]),e["\u0275did"](20,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),e["\u0275did"](22,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,k)),e["\u0275did"](24,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](25,0,null,null,10,"div",[["class","col-6"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,1,"label",[["for","module"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Select a Module"])),(l()(),e["\u0275eld"](28,0,null,null,7,"select",[["class","custom-select"],["formControlName","module"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],function(l,n,u){var t=!0,o=l.component;return"change"===n&&(t=!1!==e["\u0275nov"](l,29).onChange(u.target.value)&&t),"blur"===n&&(t=!1!==e["\u0275nov"](l,29).onTouched()&&t),"change"===n&&(t=!1!==o.onSelectedModule(u)&&t),t},null,null)),e["\u0275did"](29,16384,null,0,p.SelectControlValueAccessor,[e.Renderer2,e.ElementRef],null,null),e["\u0275prd"](1024,null,p.NG_VALUE_ACCESSOR,function(l){return[l]},[p.SelectControlValueAccessor]),e["\u0275did"](31,671744,null,0,p.FormControlName,[[3,p.ControlContainer],[8,null],[8,null],[6,p.NG_VALUE_ACCESSOR],[2,p["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),e["\u0275prd"](2048,null,p.NgControl,null,[p.FormControlName]),e["\u0275did"](33,16384,null,0,p.NgControlStatus,[[4,p.NgControl]],null,null),(l()(),e["\u0275and"](16777216,null,null,1,null,F)),e["\u0275did"](35,278528,null,0,f.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](36,0,null,null,8,"div",[["class","form-group"]],[[8,"hidden",0]],null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,3,"div",[["class","custom-control custom-radio"]],null,null,null,null,null)),(l()(),e["\u0275eld"](38,0,null,null,0,"input",[["class","custom-control-input"],["id","stacked"],["name","example"],["type","radio"],["value","customEx"]],null,[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onSelectedStack(u)&&e),e},null,null)),(l()(),e["\u0275eld"](39,0,null,null,1,"label",[["class","custom-control-label"],["for","stacked"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Stacked"])),(l()(),e["\u0275eld"](41,0,null,null,3,"div",[["class","custom-control custom-radio"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,0,"input",[["class","custom-control-input"],["id","not-stacked"],["name","example"],["type","radio"],["value","customEx"]],null,[[null,"change"]],function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.onSelectedStack(u)&&e),e},null,null)),(l()(),e["\u0275eld"](43,0,null,null,1,"label",[["class","custom-control-label"],["for","not-stacked"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Not Stacked"])),(l()(),e["\u0275eld"](45,0,null,null,6,"div",[["class","card-footer text-muted"]],null,null,null,null,null)),(l()(),e["\u0275eld"](46,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](47,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),e["\u0275eld"](48,0,null,null,1,"button",[["class","btn btn-primary"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Done"])),(l()(),e["\u0275eld"](50,0,null,null,1,"button",[["class","btn btn-dark pull-right"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onReset()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Reset"])),(l()(),e["\u0275eld"](52,0,null,null,15,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](53,0,null,null,14,"div",[["class","card h-100"]],null,null,null,null,null)),(l()(),e["\u0275eld"](54,0,null,null,13,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,12,"div",[["class","dl"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,1,"dd",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Selected Discipline: "])),(l()(),e["\u0275eld"](59,0,null,null,2,"dt",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](60,0,null,null,1,"p",[["class","text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](61,null,["",""])),(l()(),e["\u0275eld"](62,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,1,"dd",[["class","col-4"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,[" Selected Module: "])),(l()(),e["\u0275eld"](65,0,null,null,2,"dt",[["class","col-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,1,"p",[["class","text-muted"]],null,null,null,null,null)),(l()(),e["\u0275ted"](67,null,["",""]))],function(l,n){var u=n.component;l(n,10,0,u.prepModuleForm),l(n,20,0,"discipline"),l(n,24,0,u.disciplines),l(n,31,0,"module"),l(n,35,0,u.modules)},function(l,n){var u=n.component;l(n,0,0,void 0),l(n,8,0,e["\u0275nov"](n,12).ngClassUntouched,e["\u0275nov"](n,12).ngClassTouched,e["\u0275nov"](n,12).ngClassPristine,e["\u0275nov"](n,12).ngClassDirty,e["\u0275nov"](n,12).ngClassValid,e["\u0275nov"](n,12).ngClassInvalid,e["\u0275nov"](n,12).ngClassPending),l(n,17,0,e["\u0275nov"](n,22).ngClassUntouched,e["\u0275nov"](n,22).ngClassTouched,e["\u0275nov"](n,22).ngClassPristine,e["\u0275nov"](n,22).ngClassDirty,e["\u0275nov"](n,22).ngClassValid,e["\u0275nov"](n,22).ngClassInvalid,e["\u0275nov"](n,22).ngClassPending),l(n,25,0,0==u.moduleDropdown),l(n,28,0,e["\u0275nov"](n,33).ngClassUntouched,e["\u0275nov"](n,33).ngClassTouched,e["\u0275nov"](n,33).ngClassPristine,e["\u0275nov"](n,33).ngClassDirty,e["\u0275nov"](n,33).ngClassValid,e["\u0275nov"](n,33).ngClassInvalid,e["\u0275nov"](n,33).ngClassPending),l(n,36,0,0==u.stackRadio),l(n,61,0,(null==u.discipline?null:u.discipline.name)||"Select a Discipline"),l(n,67,0,(null==u.module?null:u.module.name)||"Select a Module")})}function D(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"app-tasks",[],null,null,null,R,_)),e["\u0275did"](1,638976,null,0,y,[C.a,p.FormBuilder,g.Qb,v.a,S.a,b.a,h.a],null,null)],function(l,n){l(n,1,0)},null)}var M=e["\u0275ccf"]("app-tasks",y,D,{},{},[]),I=function(){return function(){}}(),N=u("+Sv0");u.d(n,"LectureTasksModuleNgFactory",function(){return x});var x=e["\u0275cmf"](t,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,a,M]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,f.NgLocalization,f.NgLocaleLocalization,[e.LOCALE_ID,[2,f["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),e["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_o"],p["\u0275angular_packages_forms_forms_o"],[]),e["\u0275mpd"](1073742336,f.CommonModule,f.CommonModule,[]),e["\u0275mpd"](1073742336,i.p,i.p,[[2,i.u],[2,i.l]]),e["\u0275mpd"](1073742336,I,I,[]),e["\u0275mpd"](1073742336,N.a,N.a,[]),e["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_d"],p["\u0275angular_packages_forms_forms_d"],[]),e["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,t,t,[]),e["\u0275mpd"](1024,i.j,function(){return[[{path:"",component:s,children:[{path:"",redirectTo:"tasks",pathMatch:"prefix"},{path:"tasks",component:y,pathMatch:"prefix"}]}]]},[])])})},TwVa:function(l,n,u){"use strict";var e=u("mrSG"),t=function(l){function n(){return null!==l&&l.apply(this,arguments)||this}return Object(e.__extends)(n,l),n}(function(){return function(){}}()),o=function(){return function(){}}(),i=function(){return function(){}}(),s=function(){return function(){}}(),r=function(){return function(){}}(),c=(u("Vie9"),function(){return function(){}}()),d=function(){return function(){this.moduleId="",this.name="",this.type="",this.assessmentMethod="",this.nqfLevel="",this.qualificationId="",this.offeringTypeId="",this.disciplineId="",this.venueId="",this.blockId="",this.userId="",this.coordinatorId="",this.moderatorId="",this.credits=0,this.groupSize=0,this.stackId="",this.studyPeriod="",this.lecturedBy="",this.moderation=""}}(),a=function(){return function(){}}(),p=function(){return function(){}}(),f=function(){return function(){}}(),m=function(){return function(){}}(),g=function(){return function(){}}();u.d(n,"f",function(){return t}),u.d(n,"a",function(){return o}),u.d(n,"b",function(){return i}),u.d(n,"c",function(){return s}),u.d(n,"d",function(){return r}),u.d(n,"e",function(){return c}),u.d(n,"g",function(){return d}),u.d(n,"h",function(){return a}),u.d(n,"i",function(){return p}),u.d(n,"j",function(){return f}),u.d(n,"k",function(){return m}),u.d(n,"l",function(){return g})},Vie9:function(l,n,u){"use strict";u.d(n,"a",function(){return e}),u.d(n,"b",function(){return t});var e=function(){return function(){}}(),t=function(){return function(){}}()}}]);