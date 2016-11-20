var Greeter = (function () {
    function Greeter() {
    }
    Greeter.saySomething = function (message) {
        if (message === void 0) { message = 'whats up'; }
        return message + 'something';
    };
    return Greeter;
}());
Greeter.saySomething('hello');
//# sourceMappingURL=pet.js.map