(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8Ynb":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("PjpU"),o=n("yTmA"),i=n("o0o1"),c=n.n(i),u=(n("ls82"),n("HaE+")),s=n("dI71"),p=n("eHHv"),d=n("ZCxb"),m=n.n(d),f=n("vOnD"),h=n("zT9C"),b=n.n(h),E=n("RsOY"),v=n.n(E),g=n("JI6e"),y=n("kT3S"),w=n("t0wy"),x=n("cWnB"),k=n("MBJH"),j=n("zM5D"),C=n("QojX"),A=n("lEpx"),S=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showModal:!1,currentApplicationId:null,currentMeetingStatus:!1,currentContributionStatus:!1,currentName:""},t}return Object(s.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.applications,a=t.settings,l=n.filter((function(e){return e.hasOwnProperty("provisional")})),o=this.state,i=o.showModal,c=o.currentApplicationId,u=o.currentContributionStatus,s=o.currentMeetingStatus,p=o.currentName,d=function(t){var n=t.provisional,l=n.contribution,o=n.meetings,i=t.name,c=t.id;return r.a.createElement("tr",null,r.a.createElement("td",null,i),r.a.createElement("td",null,l?"Complete":"Not Complete"),r.a.createElement("td",null,o?"Complete":"Not Complete"),!a.deliberationsOpen&&r.a.createElement("td",{onClick:function(){return e.setState({showModal:!0,currentApplicationId:c,currentContributionStatus:l,currentMeetingStatus:o,currentName:i})},style:{cursor:"pointer"}},"Edit Status"))};return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement(k.a,{bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Contribution Status"),r.a.createElement("th",null,"Meetings Status"),!a.deliberationsOpen&&r.a.createElement("th",null,"Edit"))),r.a.createElement("tbody",null,l.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))})))),!a.deliberationsOpen&&r.a.createElement(x.a,{variant:"danger",onClick:this.props.readyRoundTwo},"Open Round Two"),r.a.createElement(j.a,{show:i,onHide:function(){return e.setState({showModal:!1})}},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,p)),r.a.createElement(j.a.Body,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Contribution"),r.a.createElement(C.a.Check,{custom:!0,checked:u,type:"switch",label:r.a.createElement("span",null,"Applicant has"," ",u?"completed":"not completed"," ","their contribution"),id:"contributionToggle",onChange:function(t){return e.setState({currentContributionStatus:t.target.checked})}})),r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,"Meetings"),r.a.createElement(C.a.Check,{custom:!0,checked:s,type:"switch",label:r.a.createElement("span",null,"Applicant has"," ",s?"completed":"not completed"," ","their meetings"),id:"meetingToggle",onChange:function(t){return e.setState({currentMeetingStatus:t.target.checked})}})))),r.a.createElement(j.a.Footer,null,r.a.createElement(x.a,{variant:"secondary",onClick:function(){return e.setState({showModal:!1})}},"Cancel"),r.a.createElement(x.a,{variant:"primary",onClick:function(){return e.props.saveSecondRoundStatus(c,s,u)}},"Save"))))},t}(a.Component),O=Object(o.withAuthorization)(l.a)(S),M=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).state={showModal:!1,currentApplicationId:null,currentFeedback:"",currentName:""},t}return Object(s.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,n=t.applications,a=t.settings,l=this.state,o=l.showModal,i=l.currentApplicationId,c=l.currentFeedback,u=l.currentName,s=function(t){var n=t.deliberation,l=n.votes,o=n.feedback,i=t.name,c=t.id,u=Object.values(l),s=u.filter((function(e){return!!e})).length,p=u.filter((function(e){return!e})).length,d=s/u.length>=.75;return r.a.createElement("tr",null,r.a.createElement("td",null,i),r.a.createElement("td",null,"+",s,"/-",p),r.a.createElement("td",{style:{color:d?"green":"red"}},d?"Accepted":"Not Accepted"),!a.deliberationsOpen&&r.a.createElement(r.a.Fragment,null,d?r.a.createElement("td",null,"N/A"):r.a.createElement("td",{onClick:function(){return e.setState({showModal:!0,currentApplicationId:c,currentFeedback:o,currentName:i})},style:{cursor:"pointer"}},""===o?"Add":"Edit"," Feedback")))};return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement(k.a,{bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Votes"),r.a.createElement("th",null,"Status"),!a.deliberationsOpen&&r.a.createElement("th",null,"Feedback"))),r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))})))),!a.deliberationsOpen&&r.a.createElement(x.a,{variant:"danger",onClick:this.props.sendResults},"Send Results"),r.a.createElement(j.a,{show:o,onHide:function(){return e.setState({showModal:!1})}},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,u)),r.a.createElement(j.a.Body,null,r.a.createElement(C.a,null,r.a.createElement(C.a.Group,{controlId:"exampleForm.ControlTextarea1"},r.a.createElement(C.a.Label,null,"Feedback"),r.a.createElement(C.a.Control,{as:"textarea",rows:"3",value:c,onChange:function(t){return e.setState({currentFeedback:t.target.value})}})))),r.a.createElement(j.a.Footer,null,r.a.createElement(x.a,{variant:"secondary",onClick:function(){return e.setState({showModal:!1})}},"Cancel"),r.a.createElement(x.a,{variant:"primary",onClick:function(){return e.props.saveFeedback(i,c)}},"Save"))))},t}(a.Component),I=Object(o.withAuthorization)(l.a)(M),N=n("3Z9Z"),F=f.default.p.withConfig({displayName:"QuestionDisplay__StyledP",componentId:"sc-12o97t5-0"})(["white-space:pre-wrap;"]),R=function(e){var t=e.id,n=e.name,l=e.description,o=e.answer,i=e.image,c=e.scores,u=e.interviewers,s=e.level,p=e.classYear,d=Object(a.useState)(!1),m=d[0],f=d[1],h=function(){return r.a.createElement(N.a,null,Object.entries(u).map((function(e,t){var n=e[0],a=e[1],l=a.score,o=a.note;return r.a.createElement(g.a,{key:n},r.a.createElement("h4",null,"Interviewer ",t+1),r.a.createElement("h5",null,"Score"),r.a.createElement("p",null,l),r.a.createElement("h5",null,"Notes"),r.a.createElement(F,null,o))})))},b=function(){var e=""!==i;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{style:{padding:0}},r.a.createElement("h4",null,"Description"),e&&r.a.createElement("img",{src:i,alt:n}),r.a.createElement(F,null,l)),r.a.createElement(g.a,{style:{padding:0}},r.a.createElement("h4",null,"Answer"),r.a.createElement(F,null,o)))},E=function(){return null};return"resume"!==t&&"finalNotes"!==t&&(E=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(g.a,null,r.a.createElement("h4",null,"General Average"),r.a.createElement("p",null,(null==c?void 0:c.general)||"N/A")),r.a.createElement(g.a,null,r.a.createElement("h4",null,"Class Average"),r.a.createElement("p",null,(null==c?void 0:c[p])||"N/A")),r.a.createElement(g.a,null,r.a.createElement("h4",null,"Level Average"),r.a.createElement("p",null,(null==c?void 0:c[s])||"N/A"))),r.a.createElement(x.a,{style:{marginBottom:20},onClick:function(){return f(!m)}},m?"▲ Hide":"▼ Show"," Details"),m&&r.a.createElement(b,null))}),r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h3",null,n),r.a.createElement(h,null),r.a.createElement(E,null))},$=Object(a.memo)((function(e){e.id;var t=e.vote,n=e.interview,l=e.responses,o=(e.name,e.semester,e.questions),i=e.levelConfig,c=e.voteApplicant,u=e.provisional,s=n.level,p=l.find((function(e){return 5===e.id})).value,d=i[s],m=[{id:"resume",name:"Resume",order:0},{id:"finalNotes",name:"Final Notes",order:d.length+1}];d.forEach((function(e){var t=e.id,n=e.order,a=o.find((function(e){return e.id===t}));m.push(Object.assign({},a,{order:n+1}))}));var f=Object.entries(n.interviewers).map((function(e){return{uid:e[0],name:e[1]}}));m=m.map((function(e){var t,a=f[0],r=f[1];return Object.assign({},e,{interviewers:(t={},t[a.uid]={score:n.scores[a.uid][e.id],note:n.notes[a.uid][e.id]},t[r.uid]={score:n.scores[r.uid][e.id],note:n.notes[r.uid][e.id]},t)})}));var h=function(e){var t=e.type,n=e.name,a=e.value,l=function(){return r.a.createElement("p",null,""!==a?a:"N/A")},o={flexGrow:1};switch(t){case"file":o.width="100%",l=function(){return r.a.createElement("embed",{src:a,width:"100%",height:"500",type:"application/pdf",title:n})};break;case"textarea":o.width="100%";break;case"yesno":l=function(){return r.a.createElement("p",null,a?"Yes":"No")}}return u&&"Full Name"!==n&&"Email"!==n&&"Major"!==n&&"Minor"!==n&&"Class Year"!==n?null:r.a.createElement("div",{style:o},r.a.createElement("h4",null,n),r.a.createElement(l,null))};return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement(N.a,null,r.a.createElement("h1",null,"Application Responses")),r.a.createElement(N.a,null,l.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))}))),r.a.createElement("hr",{style:{width:"100%",margin:"30px 0",background:"black"}}),u?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{alignItems:"center",justifyContent:"space-between"}},r.a.createElement("h1",null,"Provisional Period Status")),r.a.createElement(N.a,{style:{alignItems:"center",justifyContent:"space-between"}},r.a.createElement("div",null,r.a.createElement("h4",null,"Meeting Requirement"),r.a.createElement("p",null,u.meetings?"Completed":"Not Completed")),r.a.createElement("div",null,r.a.createElement("h4",null,"Contribution Requirement"),r.a.createElement("p",null,u.contribution?"Completed":"Not Completed")))):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{style:{alignItems:"center",justifyContent:"space-between"}},r.a.createElement("h1",null,"Interview Details"),r.a.createElement("h2",null,"Level: ",r.a.createElement("span",null,n.level))),r.a.createElement(N.a,null,m.sort((function(e,t){return e.order>t.order?1:-1})).map((function(e,t){return r.a.createElement(a.Fragment,{key:e.id},r.a.createElement(R,Object.assign({level:s,classYear:p},e)),t<m.length-1&&r.a.createElement("hr",{style:{width:"100%",margin:"30px 0"}}))})))),r.a.createElement("hr",{style:{width:"100%",margin:"30px 0",background:"black"}}),r.a.createElement(N.a,{style:{alignItems:"center",justifyContent:"space-between",marginBottom:25}},r.a.createElement("h1",null,"Deliberation"),r.a.createElement("h2",null,void 0!==t?"You voted to "+(t?"Accept":"Deny")+"!":"You haven't voted yet!")),r.a.createElement(N.a,{style:{alignItems:"center",justifyContent:"space-between",marginBottom:30}},r.a.createElement(x.a,{variant:"success",onClick:function(){return c(!0)}},"Accept"),r.a.createElement(x.a,{variant:"danger",onClick:function(){return c(!1)}},"Deny")))})),D=f.default.ul.withConfig({displayName:"InterviewerView__SidebarBase",componentId:"sc-11xn18m-0"})(["text-align:center;width:100%;height:100%;padding:15px;background:",";list-style:none;h1{color:white;font-weight:bold;padding-top:10px;padding-bottom:10px;border-bottom:1px solid grey;font-size:27px;}hr{border-bottom:1px solid grey;}"],(function(e){return e.theme.palette.darkShades})),Y=f.default.li.withConfig({displayName:"InterviewerView__SidebarItem",componentId:"sc-11xn18m-1"})(["color:",";font-weight:bold;padding-top:10px;padding-bottom:10px;cursor:pointer;&:hover{color:",";text-decoration:underline;}"],(function(e){return e.selected?e.theme.palette.mainBrand:"white"}),(function(e){return e.theme.palette.mainBrand})),P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Welcome to Deliberations! "),r.a.createElement("p",null," ","Please read the instructions bellow carefully before proceeding to deliberate on all the candidates."," "),r.a.createElement("h3",null," How to Vote "),r.a.createElement("p",null," ","In order to vote, select one of the candidates from the sidebar, and proceed to review their application, in it, you'll be able to see not only their general application, but also the details of their interview."," "),r.a.createElement("p",null," ","After reviewing their application, you'll find two buttons at the bottom, approve & deny, you only get 1 vote per candidate, although you will be able to switch your vote until the deliberations close."," "),r.a.createElement("h3",null," Final Details "),r.a.createElement("p",null," ","You will not be able to see anyone else's votes of the final results until the EBoard announces them."," "))},q=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this)._initFirebase=!1,t.state={applications:[],currentApplicationID:"details",currentApplication:null,settings:null,loading:!0,error:null,display:null},t.unsubSettings=null,t.unsubApplications=null,t.loadData=Object(u.a)(c.a.mark((function e(){var n,a,r,l,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t._initFirebase=!0,"details",n=window.localStorage.getItem("currentApplicationDeliberation"),a=n||"details",e.next=6,t.props.firebase.questions().get().then((function(e){return e.docs.map((function(e){return Object.assign({},e.data(),{id:e.id})}))}));case 6:return r=e.sent,e.next=9,t.props.firebase.levelConfig().get().then((function(e){return e.exists?e.data():(t.setState({error:"LevelConfig does not exist!"}),{})}));case 9:return l=e.sent,e.next=12,new Promise((function(e,n){var a=function(t){a=function(){return null},e(t)};t.unsubSettings=t.props.firebase.generalSettings().onSnapshot((function(e){if(e.exists){var n=e.data();t.setState({settings:n}),a(n)}else t.setState({error:"Failed to load settings!"})}),n)}));case 12:return o=e.sent,e.next=15,new Promise((function(e,n){var r=function(t){r=function(){return null},e(t)};t.unsubApplications=t.props.firebase.interviewedApplicants().onSnapshot((function(e){var n=e.docs.map((function(e){var t=e.data();return Object.assign({id:e.id},t,{name:t.responses.find((function(e){return 1===e.id})).value})}));if(t.setState({applications:n}),r(n),null!=a){var l="admin"===a||"secondRound"===a?a:"details";t.setCurrentApplication(n.find((function(e){return e.id===a}))||l)}}),n)}));case 15:i=e.sent,t.setState({settings:o,applications:i,questions:r,levelConfig:l,currentApplicationID:a,loading:!1});case 17:case"end":return e.stop()}}),e)}))),t.setCurrentApplication=function(e){var n="object"==typeof e&&null!==e?e.id:e;window.localStorage.setItem("currentApplicationDeliberation",n),t.setState({currentApplication:e,currentApplicationID:n})},t.voteApplicant=function(e){var n=t.state.currentApplication,a=b()(n);delete a.id,a.deliberation.votes[t.context.uid]=e,t.props.firebase.application(n.id).update(a).then((function(){return m()("You voted!","You chose to "+(e?"accept":"deny")+". Nice.","success")})).catch((function(e){return console.error(e)}))},t.saveFeedback=function(){var e=Object(u.a)(c.a.mark((function e(n,a){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.firebase.application(n).update({"deliberation.feedback":a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),t.saveSecondRoundStatus=function(){var e=Object(u.a)(c.a.mark((function e(n,a,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.firebase.application(n).update({"provisional.meetings":a,"provisional.contribution":r});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),t.readyRoundTwo=function(){return m()({title:"Hold up!",text:"If you press Yes, you're going to open the second round of deliberation, which will commit significant changes to the database! Are you sure?",icon:"warning",buttons:{cancel:{text:"No",value:!1,visible:!0},confirm:{text:"Yes",value:!0,visible:!0}}}).then((function(e){if(e){var n=t.props.firebase.firestore.batch();t.state.applications.forEach((function(e){var a=t.props.firebase.application(e.id);n.update(a,{"deliberation.accepted":!1,"deliberation.confirmed":!1,"deliberation.feedback":""})})),n.commit()}}))},t.sendResults=function(){return m()({title:"Hold up!",text:"If you press Yes, you're going to send emails to all the applicants with their results. If you haven't filled out feedback for everyone, this will be bad!",icon:"warning",buttons:{cancel:{text:"No",value:!1,visible:!0},confirm:{text:"Yes",value:!0,visible:!0}}}).then((function(e){if(e)if(t.state.applications.map((function(e){var t=e.deliberation,n=t.feedback,a=t.votes,r=Object.values(a);return r.filter((function(e){return!!e})).length/r.length>=.75||""!==n})).reduce((function(e,t){return e&&t}))){var n=t.props.firebase.firestore.batch(),a=t.state.applications.map((function(e){var a=e.id,r=e.deliberation.votes,l=Object.values(r),o=l.filter((function(e){return!!e})).length/l.length>=.75;if(o){var i={"deliberation.accepted":!0,"deliberation.votes":{}};t.state.settings.useTwoRoundDeliberations&&(i.provisional={meetings:!1,contribution:!1});var c=t.props.firebase.application(a);n.update(c,i)}return v()(e,{deliberation:{accepted:{$set:o}}})}));n.commit().then((function(){a.filter((function(e){return e.deliberation.accepted})),a.filter((function(e){return!e.deliberation.accepted}))}))}else m()("Nope","Make sure everyone who was denied has feedback!","error")}))},t}Object(s.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.firebase&&!this._initFirebase&&this.loadData()},n.componentDidUpdate=function(e){this.props.firebase&&!this._initFirebase&&this.loadData()},n.componentWillUnmount=function(){"function"==typeof this.unsubSettings&&this.unsubSettings(),"function"==typeof this.unsubApplications&&this.unsubApplications()},n.render=function(){var e=this,t=this.state,n=t.loading,a=t.error,o=t.settings,i=t.applications,c=t.currentApplication,u=t.currentApplicationID,s=t.questions,p=t.levelConfig;if(a)return r.a.createElement(w.a,{message:a});if(n)return r.a.createElement(y.a,null);var d,m=this.state.settings.deliberationsOpen,f=this.context;if(!m&&!Object(l.a)(f))return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h1",null,"Deliberations are closed!"));d="details"===u?function(){return r.a.createElement(P,null)}:"admin"===u?function(){return r.a.createElement(I,{settings:o,applications:i,saveFeedback:e.saveFeedback,sendResults:e.sendResults})}:"secondRound"===u?function(){return r.a.createElement(O,{settings:o,applications:i,saveSecondRoundStatus:e.saveSecondRoundStatus,readyRoundTwo:e.readyRoundTwo})}:"object"==typeof c?function(){return r.a.createElement($,Object.assign({questions:s,levelConfig:p,voteApplicant:e.voteApplicant,vote:c.deliberation.votes[f.uid]},c))}:function(){return r.a.createElement(P,null)};var h=function(){return r.a.createElement(g.a,{className:"flex-column",md:3,style:{padding:0}},r.a.createElement(D,null,r.a.createElement("h1",null,"Applications"),r.a.createElement(Y,{selected:"details"===c,onClick:function(){return e.setCurrentApplication("details")}},"Voting Instructions"),Object(l.a)(f)&&r.a.createElement(Y,{selected:"admin"===c,onClick:function(){return e.setCurrentApplication("admin")}},"Add Feedback"),Object(l.a)(f)&&r.a.createElement(Y,{selected:"secondRound"===c,onClick:function(){return e.setCurrentApplication("secondRound")}},"Second Round Status"),r.a.createElement("hr",null),i.sort((function(e,t){return e.name>t.name?1:-1})).map((function(t){return r.a.createElement(Y,{selected:c.id===t.id,key:t.id,onClick:function(){return e.setCurrentApplication(t)}},t.name)}))))};return r.a.createElement(A.e,{fluid:!0,flexdirection:"row"},r.a.createElement(h,null),r.a.createElement(g.a,{md:9,style:{padding:15}},r.a.createElement(d,null)))},t}(a.Component);q.contextType=o.AuthUserContext;var T=Object(p.a)(Object(o.withAuthorization)(l.e),o.withFirebase)(q),B=n("Wbzz"),G=function(e){var t=e.submitFunction,n=e.firstName,l=Object(a.useState)({file:null,profileIMG:"",twitter:"",facebook:"",github:"",linkedin:""}),o=l[0],i=l[1],c=Object(a.useState)(!1),u=c[0],s=c[1],p=function(e){var t;return i(v()(o,((t={})[e.target.name]={$set:e.target.value},t)))};return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement(C.a,{noValidate:!0,validated:u,onSubmit:function(e){e.preventDefault();var n=e.currentTarget;Array.from(n.querySelectorAll(".form-control-file")).forEach((function(e){return function(e){0===e.files.length?(e.setCustomValidity("You must upload a file!"),m()("Uh oh!","You must upload a file!","error")):e.files.length>1?(e.setCustomValidity("You can only upload 1 file!"),m()("Uh oh!","You can only upload 1 file!","error")):e.files[0].size>5242880?(e.setCustomValidity("Max file size is 5MB!"),e.value="",m()("Uh oh!","Max file size is 5MB!","error")):e.setCustomValidity("")}(e)})),!1===n.checkValidity()?(e.stopPropagation(),s(!0),m()("Missing photo!","Please provide a headshot for your profile photo.","error")):(t(b()(o)),s(!1))}},r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,r.a.createElement("h5",null,"Profile Image ",r.a.createElement(A.h,null))),r.a.createElement(C.a.File,{name:"profileIMG",accept:".png,.jpg",onChange:function(e){var t=1===e.target.files.length,a="";t&&(a="jpeg"===e.target.files[0].type.split("/")[1]?n+".jpg":n+".png",i(v()(o,{file:{$set:t?e.target.files[0]:""},profileIMG:{$set:a}})))},required:!0}))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,r.a.createElement("h5",null,"Twitter")),r.a.createElement(C.a.Control,{name:"twitter",type:"url",placeholder:"https://twitter.com/...",value:o.twitter,onChange:p}))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,r.a.createElement("h5",null,"Github ",r.a.createElement(A.h,null))),r.a.createElement(C.a.Control,{name:"github",type:"url",placeholder:"https://github.com/...",value:o.github,onChange:p,required:!0}))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,r.a.createElement("h5",null,"Facebook")),r.a.createElement(C.a.Control,{name:"facebook",type:"url",placeholder:"https://facebook.com/...",value:o.facebook,onChange:p}))),r.a.createElement(C.a.Row,null,r.a.createElement(C.a.Group,null,r.a.createElement(C.a.Label,null,r.a.createElement("h5",null,"Linkedin ",r.a.createElement(A.h,null))),r.a.createElement(C.a.Control,{name:"linkedin",type:"url",placeholder:"https://linkedin.com/...",value:o.linkedin,onChange:p,required:!0}))),r.a.createElement(x.a,{type:"submit"},"Submit")))},U=Object(p.a)(Object(o.withAuthorization)(l.b),o.withFirebase)((function(e){var t=e.firebase,n=Object(a.useState)({}),l=n[0],i=n[1],s=Object(a.useState)({}),p=s[0],d=s[1],f=Object(a.useState)(!0),h=f[0],E=f[1],v=Object(a.useState)(!1),g=v[0],k=v[1],j=Object(a.useState)(!1),C=j[0],S=j[1],O=Object(a.useState)(null),M=O[0],I=O[1],N=Object(a.useContext)(o.AuthUserContext);if(Object(a.useEffect)((function(){if(t&&N){var e=t.generalSettings().onSnapshot((function(e){e.exists?i(e.data()):I("No Settings!"),S(!0)})),n=t.application(N.uid).onSnapshot((function(e){e.exists?d(e.data()):I("No Application!"),k(!0)}));return function(){e(),n()}}}),[t,N]),Object(a.useEffect)((function(){C&&g&&E(!1)}),[g,C]),M)return r.a.createElement(w.a,{error:M});if(h)return r.a.createElement(y.a,null);var F=function(){var e=Object(u.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(delete(n=b()(N.roles)).nonmember,!l.useTwoRoundDeliberations||N.roles.provisionalMember){e.next=10;break}return n.provisionalMember=!0,e.next=6,t.user(N.uid).update({roles:n});case 6:return e.next=8,t.application(N.uid).update({"deliberation.confirmed":!0});case 8:e.next=21;break;case 10:return delete n.provisionalMember,delete n.applicant,n.upemember=!0,a=p.responses.find((function(e){return 5===e.id})).value,e.next=16,t.user(N.uid).update({roles:n,gradYear:a});case 16:return e.next=18,t.application(N.uid).delete();case 18:return e.next=20,m()("You're in!","Welcome to Upsilon Pi Epsilon at Boston University","success");case 20:Object(B.navigate)("/");case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(u.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n.file){e.next=2;break}return e.abrupt("return");case 2:return a={profileIMG:n.profileIMG,socials:{facebook:n.facebook,github:n.github,linkedin:n.linkedin,twitter:n.twitter}},e.next=5,t.uploadProfile("Provisional",n.profileIMG).put(n.file).catch((function(e){I(e)}));case 5:return e.next=7,t.user(N.uid).update(a).catch((function(e){I(e)}));case 7:return e.next=9,m()("All set!","We got your info!","success");case 9:Object(B.navigate)("/");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();if(!N.roles.applicant)return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h1",null,"You have not yet applied this semester."),r.a.createElement(B.Link,{to:"/apply"},r.a.createElement(x.a,null,"Apply!")));if(!p.interview.interviewed)return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h1",null,"You must first complete your interview!"));if(l.deliberationsOpen||!p.deliberation.accepted&&""===p.deliberation.feedback)return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h1",null,"Deliberations are still underway!"));if(!p.deliberation.accepted&&""!==p.deliberation.feedback)return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h1",null,"Keep an eye on your inbox for an update on your deliberation!"));if(!p.deliberation.confirmed){var $=function(){return l.useTwoRoundDeliberations&&!N.roles.provisionalMember?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You have been provisionally accepted into UPE!"),r.a.createElement("br",null),r.a.createElement("p",null,"We are pleased to extend to you provisional membership to UPE. This means that you are now on the way to becoming a fully fledged member of our group. Now you must go through the provisional period requirements as described in the info sessions. If you'd like to accept this and start your onboarding period, please click the button below to confirm.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"You have been officially accepted into UPE!"),r.a.createElement("br",null),r.a.createElement("p",null,"We are pleased to announce that you have been officially accepted into UPE. In order for us to complete this process, we require that you confirm your acceptance by clicking below."))};return r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("div",null,r.a.createElement("h1",null,"Your Results")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(x.a,{onClick:F},"Confirm")))}return""!==N.profileIMG?r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("h1",null,"You're all set!")):r.a.createElement(A.c,{flexdirection:"column"},r.a.createElement("div",null,r.a.createElement("h1",null,"Next Steps"),r.a.createElement("p",null,"Now that you've accepted to join UPE, you will continue on with the onboarding period, during this time, and has mentioned during the Info Sessions, you will be required to attend chapter, meet current members, and contribute in some way to UPE. Further details about this will be given to you shortly by our Recruitment Team."),r.a.createElement("p",null,"For the time being however, we ask that you fill out the form bellow, so that once onboarding is over, we can induct you and add you to our database & website in a timely manner.")),r.a.createElement("br",null),r.a.createElement("h2",null," Data Form "),r.a.createElement(G,{submitFunction:R,firstName:N.name.split(" ")[0]}))}));t.default=function(){var e=Object(a.useContext)(o.AuthUserContext);return Object(l.e)(e)?r.a.createElement(T,null):r.a.createElement(U,null)}},MBJH:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),l=n("TSYQ"),o=n.n(l),i=n("q1tI"),c=n.n(i),u=n("vUet"),s=c.a.forwardRef((function(e,t){var n=e.bsPrefix,l=e.className,i=e.striped,s=e.bordered,p=e.borderless,d=e.hover,m=e.size,f=e.variant,h=e.responsive,b=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),E=Object(u.a)(n,"table"),v=o()(l,E,f&&E+"-"+f,m&&E+"-"+m,i&&E+"-striped",s&&E+"-bordered",p&&E+"-borderless",d&&E+"-hover"),g=c.a.createElement("table",Object(a.a)({},b,{className:v,ref:t}));if(h){var y=E+"-responsive";return"string"==typeof h&&(y=y+"-"+h),c.a.createElement("div",{className:y},g)}return g}));t.a=s},RsOY:function(e,t,n){"use strict";(function(n){function a(e){return"object"!=typeof e||"toString"in e?e:Object.prototype.toString.call(e).slice(8,-1)}Object.defineProperty(t,"__esModule",{value:!0});var r="object"==typeof n&&!0;function l(e,t){if(!e){if(r)throw new Error("Invariant failed");throw new Error(t())}}t.invariant=l;var o=Object.prototype.hasOwnProperty,i=Array.prototype.splice,c=Object.prototype.toString;function u(e){return c.call(e).slice(8,-1)}var s=Object.assign||function(e,t){return p(t).forEach((function(n){o.call(t,n)&&(e[n]=t[n])})),e},p="function"==typeof Object.getOwnPropertySymbols?function(e){return Object.keys(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.keys(e)};function d(e){return Array.isArray(e)?s(e.constructor(e.length),e):"Map"===u(e)?new Map(e):"Set"===u(e)?new Set(e):e&&"object"==typeof e?s(Object.create(Object.getPrototypeOf(e)),e):e}var m=function(){function e(){this.commands=s({},f),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(e,t){return e===t},this.update.newContext=function(){return(new e).update}}return Object.defineProperty(e.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(e){this.update.isEquals=e},enumerable:!0,configurable:!0}),e.prototype.extend=function(e,t){this.commands[e]=t},e.prototype.update=function(e,t){var n=this,a="function"==typeof t?{$apply:t}:t;Array.isArray(e)&&Array.isArray(a)||l(!Array.isArray(a),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),l("object"==typeof a&&null!==a,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var r=e;return p(a).forEach((function(t){if(o.call(n.commands,t)){var l=e===r;r=n.commands[t](a[t],r,a,e),l&&n.isEquals(r,e)&&(r=e)}else{var i="Map"===u(e)?n.update(e.get(t),a[t]):n.update(e[t],a[t]),c="Map"===u(r)?r.get(t):r[t];n.isEquals(i,c)&&(void 0!==i||o.call(e,t))||(r===e&&(r=d(e)),"Map"===u(r)?r.set(t,i):r[t]=i)}})),r},e}();t.Context=m;var f={$push:function(e,t,n){return b(t,n,"$push"),e.length?t.concat(e):t},$unshift:function(e,t,n){return b(t,n,"$unshift"),e.length?e.concat(t):t},$splice:function(e,t,n,r){return function(e,t){l(Array.isArray(e),(function(){return"Expected $splice target to be an array; got "+a(e)})),v(t.$splice)}(t,n),e.forEach((function(e){v(e),t===r&&e.length&&(t=d(r)),i.apply(t,e)})),t},$set:function(e,t,n){return function(e){l(1===Object.keys(e).length,(function(){return"Cannot have more than one key in an object with $set"}))}(n),e},$toggle:function(e,t){E(e,"$toggle");var n=e.length?d(t):t;return e.forEach((function(e){n[e]=!t[e]})),n},$unset:function(e,t,n,a){return E(e,"$unset"),e.forEach((function(e){Object.hasOwnProperty.call(t,e)&&(t===a&&(t=d(a)),delete t[e])})),t},$add:function(e,t,n,a){return g(t,"$add"),E(e,"$add"),"Map"===u(t)?e.forEach((function(e){var n=e[0],r=e[1];t===a&&t.get(n)!==r&&(t=d(a)),t.set(n,r)})):e.forEach((function(e){t!==a||t.has(e)||(t=d(a)),t.add(e)})),t},$remove:function(e,t,n,a){return g(t,"$remove"),E(e,"$remove"),e.forEach((function(e){t===a&&t.has(e)&&(t=d(a)),t.delete(e)})),t},$merge:function(e,t,n,r){var o,i;return o=t,l((i=e)&&"object"==typeof i,(function(){return"update(): $merge expects a spec of type 'object'; got "+a(i)})),l(o&&"object"==typeof o,(function(){return"update(): $merge expects a target of type 'object'; got "+a(o)})),p(e).forEach((function(n){e[n]!==t[n]&&(t===r&&(t=d(r)),t[n]=e[n])})),t},$apply:function(e,t){var n;return l("function"==typeof(n=e),(function(){return"update(): expected spec of $apply to be a function; got "+a(n)+"."})),e(t)}},h=new m;function b(e,t,n){l(Array.isArray(e),(function(){return"update(): expected target of "+a(n)+" to be an array; got "+a(e)+"."})),E(t[n],n)}function E(e,t){l(Array.isArray(e),(function(){return"update(): expected spec of "+a(t)+" to be an array; got "+a(e)+". Did you forget to wrap your parameter in an array?"}))}function v(e){l(Array.isArray(e),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+a(e)+". Did you forget to wrap your parameters in an array?"}))}function g(e,t){var n=u(e);l("Map"===n||"Set"===n,(function(){return"update(): "+a(t)+" expects a target of type Set or Map; got "+a(n)}))}t.isEquals=h.update.isEquals,t.extend=h.extend,t.default=h.update,t.default.default=e.exports=s(t.default,t)}).call(this,n("8oxB"))},t0wy:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("lEpx");t.a=function(e){var t=e.message;return r.a.createElement(l.c,{flexdirection:"column"},r.a.createElement("h1",null,t))}}}]);
//# sourceMappingURL=component---src-pages-deliberation-js-26d05cd5717ff8cc5aea.js.map