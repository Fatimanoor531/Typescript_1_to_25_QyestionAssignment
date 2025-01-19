"use strict";
let guest_list = ["saadi", "ali", "hannan", "yousuf"];
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear friends: " + guest_list[i] + "\n we invited you on dinner my home tommorow, \n Thank You\n");
}
//Q15:
let not_present = "ali";
let new_guest = "umer";
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear friends: " + guest_list[i] + "\n we invited you on dinner my home tommorow, \n Thank You\n");
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner\n. `);
