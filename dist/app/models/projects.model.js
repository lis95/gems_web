"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var type_graphql_1 = require("type-graphql");
var users_model_1 = __importDefault(require("./users.model"));
var Project = (function () {
    function Project() {
    }
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.ID; }),
        __metadata("design:type", String)
    ], Project.prototype, "id", void 0);
    __decorate([
        type_graphql_1.Field(function () { return String; }),
        __metadata("design:type", String)
    ], Project.prototype, "name", void 0);
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.GraphQLISODateTime; }, { nullable: true }),
        __metadata("design:type", String)
    ], Project.prototype, "created_at", void 0);
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.GraphQLISODateTime; }, { nullable: true }),
        __metadata("design:type", String)
    ], Project.prototype, "updated_at", void 0);
    __decorate([
        type_graphql_1.Field(function () { return type_graphql_1.GraphQLISODateTime; }, { nullable: true }),
        __metadata("design:type", String)
    ], Project.prototype, "deleted_at", void 0);
    __decorate([
        type_graphql_1.Field(function () { return users_model_1.default; }, { nullable: true }),
        __metadata("design:type", users_model_1.default)
    ], Project.prototype, "user", void 0);
    Project = __decorate([
        type_graphql_1.ObjectType({ description: 'Project Model' })
    ], Project);
    return Project;
}());
exports.default = Project;
