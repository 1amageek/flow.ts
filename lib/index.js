"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var options = {
    projectId: 'sandbox-329fc',
    keyFilename: './sandbox-329fc-firebase-adminsdk-8kgnw-3a2693f6cb.json'
};
var Step = /** @class */ (function () {
    function Step(script) {
        this.script = script;
    }
    Step.prototype.execute = function (input) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.dependency = this.script(input);
                return [2 /*return*/, this.dependency];
            });
        });
    };
    Step.prototype.hasError = function () {
        return this.dependency.error == null;
    };
    return Step;
}());
var Flow = /** @class */ (function () {
    function Flow(steps) {
        this.steps = [];
        this.steps = steps;
    }
    Flow.prototype.run = function (dependency) {
        return __awaiter(this, void 0, void 0, function () {
            var i, step, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.steps.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        step = this.steps[i];
                        return [4 /*yield*/, step.execute(dependency)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        throw (error_1);
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    return Flow;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    return Order;
}());
var main = function () { return __awaiter(_this, void 0, void 0, function () {
    var flow1, flow2, flow, order, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                flow1 = new Step(function (dependency) {
                    console.log("flow1");
                    return dependency;
                });
                flow2 = new Step(function (dependency) {
                    console.log("flow2");
                    return dependency;
                });
                flow = new Flow([flow1, flow2]);
                order = new Order();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, flow.run(order)];
            case 2:
                _b.sent();
                return [3 /*break*/, 4];
            case 3:
                _a = _b.sent();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
void main();
