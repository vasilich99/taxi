'use strict';

import {orders} from "./orders-vodafone.js";

function sum(from, to) {
    let filtered = orders.filter((trip) => (trip.date > from && trip.date < to));
    let sum =  filtered.reduce((sum, current) => sum + current.price, 0);
    return sum;
}

function today() {                                                                  // получает начало и конец сегодняшнего дня
    let now = new Date();
    let start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    end.setSeconds(-1);
    return [start, end];
}

function yesterday() {                                                               // получает начало и конец вчерашнего дня
    let [startToday, endToday] = today();
    let startYesterday = new Date(startToday.setDate(startToday.getDate() - 1));
    let endYesterday = new Date(endToday.setDate(endToday.getDate() - 1));
    
    console.log(new Date(startYesterday));
    console.log(new Date(endYesterday));
    
    return [startYesterday, endYesterday];
}

function thisWeek() {                                                               // получает начало и конец недели
    let [startToday, endToday] = today();
    let days = startToday.getDay();
    if (days === 0) {
        days = 7;
    }
    let startWeek = new Date(startToday.setDate(startToday.getDate() - days + 1));
    
    console.log(new Date(startWeek));
    console.log(new Date(endToday));
    
    return [startWeek, endToday];
}

function lastWeek() {                                                               // получает начало и конец прошлой недели
    let [startWeek] = thisWeek();
    let endLastWeek = new Date(startWeek.setSeconds(-1));
    let startLastWeek = new Date(endLastWeek);
    startLastWeek.setDate(startLastWeek.getDate() - 7);
    startLastWeek.setSeconds(60);
    
    console.log(new Date(startLastWeek));
    console.log(new Date(endLastWeek));
    
    return [startLastWeek, endLastWeek];
}

function thisMonth() {                                                                // получает начало и конец месяца                                         
    let [startToday, endToday] = today();
    let startMonth = new Date(startToday.setDate(1));
    
    console.log(new Date(startMonth));
    console.log(new Date(endToday));
    
    return [startMonth, endToday];
}

function lastMonth() {                                                             // получает начало и конец прошлого месяца                         
    let [startMonth] = thisMonth();
    let endLastMonth = new Date(startMonth.setSeconds(-1));
    let startLastMonth = new Date(endLastMonth);
    startLastMonth.setMonth(startLastMonth.getMonth() - 1);
    startLastMonth.setSeconds(60);
    
    console.log(new Date(startLastMonth));
    console.log(new Date(endLastMonth));

    return [startLastMonth, endLastMonth];
}

function thisYear() {                                                                // получает начало и конец года                                         
    let [startToday, endToday] = today();
    let startYear = new Date(startToday.getFullYear(), 0, 1);

    console.log(new Date(startYear));
    console.log(new Date(endToday));

    return [startYear, endToday];
}

let [startToday, endToday] = today();
let [startYesterday, endYesterday] = yesterday();
let [startWeek, endWeek] = thisWeek();
let [startLastWeek, endLastWeek] = lastWeek();
let [startMonth, endMonth] = thisMonth();
let [startLastMonth, endLastMonth] = lastMonth();
let [startYear, endYear] = thisYear();

let sumToday = sum(startToday, endToday);
let sumYesterday = sum(startYesterday, endYesterday);
let sumThisWeek = sum(startWeek, endWeek);
let sumLastWeek = sum(startLastWeek, endLastWeek);
let sumThisMonth = sum(startMonth, endMonth);
let sumLastMonth = sum(startLastMonth, endLastMonth);
let sumThisYear = sum(startYear, endYear);

console.log(sumToday);
console.log(sumYesterday);
console.log(sumThisWeek);
console.log(sumLastWeek);
console.log(sumThisMonth);
console.log(sumLastMonth);
console.log(sumThisYear);