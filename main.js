(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_task_component_create_task_component_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-task-component/create-task-component.component */ "./src/app/create-task-component/create-task-component.component.ts");
/* harmony import */ var _task_details_component_task_details_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-details-component/task-details-component.component */ "./src/app/task-details-component/task-details-component.component.ts");
/* harmony import */ var _task_list_component_task_list_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list-component/task-list-component.component */ "./src/app/task-list-component/task-list-component.component.ts");






var routes = [
    { path: 'tasks/create', component: _create_task_component_create_task_component_component__WEBPACK_IMPORTED_MODULE_3__["CreateTaskComponentComponent"] },
    { path: 'tasks/:id', component: _task_details_component_task_details_component_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailsComponentComponent"] },
    { path: 'tasks', component: _task_list_component_task_list_component_component__WEBPACK_IMPORTED_MODULE_5__["TaskListComponentComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#body {\r\n    margin: 0px 10px 0px 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib2R5IHtcclxuICAgIG1hcmdpbjogMHB4IDEwcHggMHB4IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n    <h1>Welcome to ManageYourTasks.com!!</h1>\n    <button (click)=\"toList()\">View Your Tasks!</button>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(TaskService, router) {
        this.TaskService = TaskService;
        this.router = router;
        this.title = 'A5';
    }
    AppComponent.prototype.toList = function () {
        this.router.navigate(['/tasks']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _task_list_component_task_list_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list-component/task-list-component.component */ "./src/app/task-list-component/task-list-component.component.ts");
/* harmony import */ var _task_list_item_component_task_list_item_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-list-item-component/task-list-item-component.component */ "./src/app/task-list-item-component/task-list-item-component.component.ts");
/* harmony import */ var _create_task_component_create_task_component_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-task-component/create-task-component.component */ "./src/app/create-task-component/create-task-component.component.ts");
/* harmony import */ var _task_details_component_task_details_component_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task-details-component/task-details-component.component */ "./src/app/task-details-component/task-details-component.component.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _task_list_component_task_list_component_component__WEBPACK_IMPORTED_MODULE_6__["TaskListComponentComponent"],
                _task_list_item_component_task_list_item_component_component__WEBPACK_IMPORTED_MODULE_7__["TaskListItemComponentComponent"],
                _create_task_component_create_task_component_component__WEBPACK_IMPORTED_MODULE_8__["CreateTaskComponentComponent"],
                _task_details_component_task_details_component_component__WEBPACK_IMPORTED_MODULE_9__["TaskDetailsComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create-task-component/create-task-component.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/create-task-component/create-task-component.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#newTask {\r\n    padding: 3px;\r\n    height: 100px;\r\n    width: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLXRhc2stY29tcG9uZW50L2NyZWF0ZS10YXNrLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLXRhc2stY29tcG9uZW50L2NyZWF0ZS10YXNrLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25ld1Rhc2sge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/create-task-component/create-task-component.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/create-task-component/create-task-component.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Enter the Task information</h3>\n\n<div class=\"container\">\n  <form>\n\n    <div class=\"form-group\">\n      <label for=\"newTask\">Task</label>\n      <br>\n      <input type=\"text\" class=\"form-control\" id=\"newTask\" #newTask required>\n    </div>\n\n    <button class=\"btn btn-success\" (click) = 'getTask(newTask.value)'>Submit</button>\n\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/create-task-component/create-task-component.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/create-task-component/create-task-component.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateTaskComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskComponentComponent", function() { return CreateTaskComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CreateTaskComponentComponent = /** @class */ (function () {
    function CreateTaskComponentComponent(TaskService, router) {
        this.TaskService = TaskService;
        this.router = router;
    }
    CreateTaskComponentComponent.prototype.getTask = function (task) {
        this.TaskService.createTask(task);
        this.router.navigate(['/tasks']);
    };
    CreateTaskComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-task-component',
            template: __webpack_require__(/*! ./create-task-component.component.html */ "./src/app/create-task-component/create-task-component.component.html"),
            styles: [__webpack_require__(/*! ./create-task-component.component.css */ "./src/app/create-task-component/create-task-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateTaskComponentComponent);
    return CreateTaskComponentComponent;
}());



/***/ }),

/***/ "./src/app/task-details-component/task-details-component.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/task-details-component/task-details-component.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stZGV0YWlscy1jb21wb25lbnQvdGFzay1kZXRhaWxzLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task-details-component/task-details-component.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/task-details-component/task-details-component.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>\n  Task Details\n</h2>\n<h3>\n  Here you can view and update the details of a specific task\n</h3>\n<div *ngIf=\"viewPage\">\n  <p>\n    <strong>Task ID: </strong>{{task._id}}\n  </p>\n  <p>\n    <strong>Task Description: </strong>{{task.description}}\n  </p>\n  <p>\n    <strong>Date of task creation: </strong>{{task.dateCreated}}\n  </p>\n  <p>\n    <strong>Is the task done? </strong>{{task.isComplete}}\n  </p>\n  <p>\n    <strong>Is was the task done? (0 if not done): </strong>{{task.dateCompleted}}\n  </p>\n  <p>\n    <button (click)=\"changeToUpdate()\">Update</button>\n  </p>\n</div>\n\n<div *ngIf=\"updatePage\">\n  <p>\n    <button (click)=\"changeToView()\">Go Back</button>\n  </p>\n  <p>\n    <strong>Modify the description: </strong><input #newDescription type=\"text\" [value]=\"task.description\">\n  </p>\n  <p>\n    <strong>Have you completed the task? </strong>\n\n\n\n    <select #newIsComplete>\n      <option [value]=\"task.isComplete\">{{task.isComplete}}</option>\n      <option [value]=\"!task.isComplete\">{{!task.isComplete}}</option>\n    </select>\n\n  </p>\n  <p>\n    <button (click)=\"updateTask(newDescription.value, newIsComplete.value)\">Submit</button>\n  </p>\n</div>"

/***/ }),

/***/ "./src/app/task-details-component/task-details-component.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/task-details-component/task-details-component.component.ts ***!
  \****************************************************************************/
/*! exports provided: TaskDetailsComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponentComponent", function() { return TaskDetailsComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../task-service.service */ "./src/app/task-service.service.ts");




var TaskDetailsComponentComponent = /** @class */ (function () {
    function TaskDetailsComponentComponent(route, TaskService, router) {
        this.route = route;
        this.TaskService = TaskService;
        this.router = router;
        this.viewPage = true;
        this.updatePage = false;
    }
    /**
     */
    TaskDetailsComponentComponent.prototype.ngOnInit = function () {
        var id = 0;
        this.route.params.subscribe(function (params) {
            id = params['id'];
        });
        this.getTask(id);
    };
    TaskDetailsComponentComponent.prototype.getTask = function (id) {
        var _this = this;
        this.TaskService.getTask(id).subscribe(function (data) { _this.task = data; console.log(_this.task); });
    };
    /**
     */
    TaskDetailsComponentComponent.prototype.changeToUpdate = function () {
        this.viewPage = false;
        this.updatePage = true;
    };
    /**
     */
    TaskDetailsComponentComponent.prototype.changeToView = function () {
        this.viewPage = true;
        this.updatePage = false;
    };
    TaskDetailsComponentComponent.prototype.updateTask = function (newDescription, newIsComplete) {
        this.task.description = newDescription;
        this.task.isComplete = newIsComplete;
        this.TaskService.updateTask(this.task);
        var id = 0;
        this.route.params.subscribe(function (params) {
            id = params['id'];
        });
        this.getTask(id);
        this.changeToView();
    };
    TaskDetailsComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-details-component',
            template: __webpack_require__(/*! ./task-details-component.component.html */ "./src/app/task-details-component/task-details-component.component.html"),
            styles: [__webpack_require__(/*! ./task-details-component.component.css */ "./src/app/task-details-component/task-details-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _task_service_service__WEBPACK_IMPORTED_MODULE_3__["TaskServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TaskDetailsComponentComponent);
    return TaskDetailsComponentComponent;
}());



/***/ }),

/***/ "./src/app/task-list-component/task-list-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/task-list-component/task-list-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbGlzdC1jb21wb25lbnQvdGFzay1saXN0LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/task-list-component/task-list-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/task-list-component/task-list-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<h2>Here is a list of all your tasks!</h2>\n<div>\n  <span>\n    <button (click)=\"newTask()\">Create New Task</button>\n  </span>\n</div>\n<div *ngFor=\"let task of currentTasks\">\n  <app-task-list-item-component taskId={{task._id}}>\n  </app-task-list-item-component>\n</div>"

/***/ }),

/***/ "./src/app/task-list-component/task-list-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/task-list-component/task-list-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: TaskListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponentComponent", function() { return TaskListComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var TaskListComponentComponent = /** @class */ (function () {
    function TaskListComponentComponent(TaskService, router) {
        this.TaskService = TaskService;
        this.router = router;
    }
    TaskListComponentComponent.prototype.ngOnInit = function () {
        this.getAllTasks();
    };
    /**
     */
    TaskListComponentComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.TaskService.getAllTasks()
            .toPromise()
            .then(function (response) {
            _this.currentTasks = response.tasks;
            console.log(_this.currentTasks);
        });
    };
    TaskListComponentComponent.prototype.newTask = function () {
        this.router.navigate(['/tasks/create']);
    };
    TaskListComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list-component',
            template: __webpack_require__(/*! ./task-list-component.component.html */ "./src/app/task-list-component/task-list-component.component.html"),
            styles: [__webpack_require__(/*! ./task-list-component.component.css */ "./src/app/task-list-component/task-list-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskListComponentComponent);
    return TaskListComponentComponent;
}());



/***/ }),

/***/ "./src/app/task-list-item-component/task-list-item-component.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/task-list-item-component/task-list-item-component.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#taskBox {\r\n    border: 1px solid black;\r\n    height: auto;\r\n    width: 500px;\r\n    padding: 5px 5px 5px 5px;\r\n    margin: 5px 0px 5px 0px;\r\n}\r\n\r\n.complete {\r\n    padding: 5px 0px 0px 0px;\r\n    text-align: right;\r\n}\r\n\r\n.icon {\r\n    float: right;\r\n    padding: 0px 2px 0px 2px;\r\n}\r\n\r\n.icon .hoverText {\r\n    display: none;\r\n    text-align: center;\r\n    background-color: beige;\r\n    border-radius: 6px;\r\n    border: 1px solid black;\r\n    position: absolute;\r\n    z-index: 1;\r\n}\r\n\r\n.icon:hover .hoverText {\r\n    display: inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay1saXN0LWl0ZW0tY29tcG9uZW50L3Rhc2stbGlzdC1pdGVtLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7O0FBSUE7SUFDSSxZQUFZO0lBQ1osd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Rhc2stbGlzdC1pdGVtLWNvbXBvbmVudC90YXNrLWxpc3QtaXRlbS1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0YXNrQm94IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMHB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5jb21wbGV0ZSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDBweCAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuXHJcblxyXG4uaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAwcHggMnB4IDBweCAycHg7XHJcbn1cclxuXHJcbi5pY29uIC5ob3ZlclRleHQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaWNvbjpob3ZlciAuaG92ZXJUZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/task-list-item-component/task-list-item-component.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/task-list-item-component/task-list-item-component.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"taskBox\">\n\n  <div class=\"icons\">\n    <div class=\"icon\">\n      <button class=\"w3-large fa fa-trash\" (click)=\"deleteTask()\"></button>\n      <span class=\"hoverText\">Delete this task</span>\n    </div>\n    <div class=\"icon\">\n      <button class=\"w3-large fa fa-edit\" (click)=\"updateTask()\"></button>\n      <span class=\"hoverText\">Edit this task</span>\n    </div>\n  </div>\n  <br>\n  <div class=\"description\">\n    {{task.description}}\n  </div>\n  <div class=\"complete\">\n    <div *ngIf=\"task.isComplete\">\n      {{task.dateCompleted}}\n    </div>\n    <div *ngIf=\"!task.isComplete\">\n      Not Completed\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/task-list-item-component/task-list-item-component.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/task-list-item-component/task-list-item-component.component.ts ***!
  \********************************************************************************/
/*! exports provided: TaskListItemComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListItemComponentComponent", function() { return TaskListItemComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../task-service.service */ "./src/app/task-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _task_details_component_task_details_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-details-component/task-details-component.component */ "./src/app/task-details-component/task-details-component.component.ts");





var TaskListItemComponentComponent = /** @class */ (function () {
    function TaskListItemComponentComponent(TaskService, router) {
        this.TaskService = TaskService;
        this.router = router;
    }
    TaskListItemComponentComponent.prototype.ngOnInit = function () {
        this.getTask(this.taskId);
    };
    TaskListItemComponentComponent.prototype.getTask = function (id) {
        var _this = this;
        this.TaskService.getTask(id).subscribe(function (data) { _this.task = data; });
    };
    /**
     */
    TaskListItemComponentComponent.prototype.deleteTask = function () {
        this.TaskService.deleteTask(this.task._id);
        document.getElementById('taskBox').style.display = 'none';
    };
    /**
     */
    TaskListItemComponentComponent.prototype.updateTask = function () {
        this.router.navigate(['/tasks/' + this.task._id]);
        _task_details_component_task_details_component_component__WEBPACK_IMPORTED_MODULE_4__["TaskDetailsComponentComponent"].prototype.changeToUpdate();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], TaskListItemComponentComponent.prototype, "taskId", void 0);
    TaskListItemComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-list-item-component',
            template: __webpack_require__(/*! ./task-list-item-component.component.html */ "./src/app/task-list-item-component/task-list-item-component.component.html"),
            styles: [__webpack_require__(/*! ./task-list-item-component.component.css */ "./src/app/task-list-item-component/task-list-item-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_task_service_service__WEBPACK_IMPORTED_MODULE_2__["TaskServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskListItemComponentComponent);
    return TaskListItemComponentComponent;
}());



/***/ }),

/***/ "./src/app/task-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/task-service.service.ts ***!
  \*****************************************/
/*! exports provided: TaskServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskServiceService", function() { return TaskServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var TaskServiceService = /** @class */ (function () {
    function TaskServiceService(http) {
        this.http = http;
        this.APIURL = 'http://cosc484a7back.herokuapp.com/api/tasks';
    }
    /*
   * @param  {} descriptionp
   */
    TaskServiceService.prototype.createTask = function (descriptionp) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/x-www-form-urlencoded' });
        var options = { headers: httpHeaders };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('description', descriptionp);
        this.http.post(this.APIURL, body.toString(), options)
            .subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
    };
    /*
     * @param  {number} id
     */
    TaskServiceService.prototype.getTask = function (id) {
        return this.http.get(this.APIURL + '/' + id);
    };
    /*
     * @param  {Tasks} task
     */
    TaskServiceService.prototype.updateTask = function (task) {
        var patchHttpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/x-www-form-urlencoded' });
        var patchOptions = { headers: patchHttpHeaders };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('description', task.description)
            .set('isComplete', task.isComplete.toString());
        this.http.patch(this.APIURL + '/' + task._id, body.toString(), patchOptions)
            .subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
    };
    /*
     * @param  {number} id
     */
    TaskServiceService.prototype.deleteTask = function (id) {
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-type': 'application/x-www-form-urlencoded' });
        var options = { headers: httpHeaders };
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('id', id.toString());
        this.http.post(this.APIURL + '/' + id, body.toString(), options)
            .subscribe(function (response) { return console.log(response); }, function (err) { return console.log(err); });
    };
    TaskServiceService.prototype.getAllTasks = function () {
        return this.http.get(this.APIURL);
    };
    TaskServiceService.prototype.clearStorage = function () {
        localStorage.clear();
    };
    TaskServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TaskServiceService);
    return TaskServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ThomasSheil\OneDrive\Documents\COSC 484\Assignment7\Front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map