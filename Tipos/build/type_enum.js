"use strict";
// Type Enum
var DesignerColor;
(function (DesignerColor) {
    DesignerColor["RED"] = "Red";
    DesignerColor["GREEN"] = "Green";
    DesignerColor["BLUE"] = "Blue";
})(DesignerColor || (DesignerColor = {}));
// console.log(DesignerColor.RED); // Red
var StatusPermission;
(function (StatusPermission) {
    StatusPermission[StatusPermission["ADMIN"] = 0] = "ADMIN";
    StatusPermission[StatusPermission["USER"] = 1] = "USER";
    StatusPermission[StatusPermission["SUPORT"] = 2] = "SUPORT";
})(StatusPermission || (StatusPermission = {}));
// console.log(StatusPermission.ADMIN); // 0
// console.log(StatusPermission.USER); // 1
console.log(StatusPermission.SUPORT); // 2
