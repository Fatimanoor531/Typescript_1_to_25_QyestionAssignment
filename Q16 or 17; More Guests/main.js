"use strict";
let guest_list = ["saadi", "ali", "hannan", "yousuf"];
let not_present = "ali";
let new_guest = "umer";
guest_list[1] = new_guest;
// for(let i = 0; i < guest_list.length; i++) {
//     console.log("Dear friends: " + guest_list[i] + "\n we invited you on dinner my home tommorow, \n Thank You\n" );
// }
console.log(`Mr. ${not_present} will not coming tomorrow dinner\n. `);
guest_list.unshift("faizii", "ahmed", "arham");
// for(let i = 0; i < guest_list.length; i++) {
//     console.log("Dear friends: " + guest_list[i] + "\n we invited you on dinner my home tommorow. We found big table so we decide to invite 3 more guest. \n Thank You\n" );
// }
console.log("\n unfortunately we can not arrange big table, Only two people allow.");
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry friends.${remove_guest} you are not invited for dinner.`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log("Dear friends: " + guest_list[i] + "\n yes you are still invited on tomorrow dinner. \n Thank You\n");
}
guest_list.splice(0, 2);
console.log(guest_list);
