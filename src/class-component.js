import React, { Component } from "react";
export default class Calender extends Component {
  getDate() {
    const dayNames = [
      "อาทิตย์",
      "จันทร์",
      "อังคาร",
      "พุธ",
      "พฤหัสบดี",
      "ศุกร์",
      "เสาร์"
    ];

    const mounthNames = [
      "มกราคม",
      "กุมภาพันธ์",
      "มีนาคม",
      "เมษายน",
      "พฤษภาคม",
      "มิถุนายน",
      "กรกฎาคม",
      "สิงหาคม",
      "กันยายน",
      "ตุลาคม",
      "พฤศจิกายน",
      "ธันวาคม"
    ];
    const date = new Date();
    const weekDay = dayNames[date.getDay()];
    const day = date.getDate();
    const month = mounthNames[date.getMonth()];
    const year = date.getFullYear() + 543;
    return `วัน${weekDay} ที่ ${day} ${month} ${year}`;
  }

  render() {
    return <div>{this.getDate()}</div>;
  }
}
