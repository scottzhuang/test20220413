<template>
    <div class="l-main">
        <section class="work section" id="work">
        <h2 class="section-title">Work</h2>

        <div class="work__container bd-grid">
            <div class="top" style="background: #fff; padding: 8px 6px;width: 100%" >
                <div class="modelBox">
                <span class="radis"></span>
                <span style="color: black; font-size: 16px; font-weight: bold">待办任务</span>
                </div>
            </div>
        </div>
        <div class="tabs" style="width: 100%">
            <FullCalendar ref="fullCalendar" :options="calendarOptions" class="demo-app-calendar" />
        </div>
    </section>
    </div>
</template>

<script>

import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import zhCnLocale from '@fullcalendar/core/locales/zh-cn'

export default {
    name:'',
    components: {
        FullCalendar // make the <FullCalendar> tag available
    },
    data(){
        return{
            calendarOptions: {
                plugins: [
                // 加载插件，V5采用插件模块方式加入
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin, // needed for dateClick
                ],
                height: 800, //日历高度
                width: 600,
                headerToolbar: {
                // 头部toolba
                left: 'prev,next today',
                center: 'title',
                right: 'timeGridDay,timeGridWeek,dayGridMonth',
                // right: 'dayGridMonth'
                },
                handleWindowResize: true, //随浏览器窗口变化
                initialView: 'dayGridMonth', // 初始化插件显示
                // initialDate:""//初始化日期
                // initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
                // editable: true, //是否可编辑
                // droppable: true,//可拖拽的
                // timeZone: 'local',//采用时区
                selectable: true,
                // selectMirror: true,
                dayMaxEvents: true,
                // weekends: true, // 是否显示一周七天
                // select: this.handleDateSelect,
                // eventClick: this.handleEventClick, // 日程点击事件
                eventMouseEnter: this.handleEventMouseEnter, // 用户将鼠标悬停在事件上时触发
                // eventsSet: this.handleEvents,
                // dateClick: this.handleDateClick,//日期方格点击事件
                eventClick: this.handleEventClick, //日程点击事件
                locale: zhCnLocale,
                nextDayThreshold: '01:00:00',
                events: [
                //日程事件的json
                { title: 'event 1', date: '2021-04-23 12:00:00' },
                { title: 'event 2', date: '2021-04-24 05:59:23' },
                { title: 'event 3', date: '2021-04-25 08:23:00' },
                { title: 'event 4', date: '2021-04-25 09:30:00' },
                { title: 'event 5', date: '2021-04-26 12:00:00' },
                { title: 'event 2', date: '2021-04-26 15:00:00' }
                ],
                // datesSet: this.handleDateSet,
                /* you can update a remote database when these fire:
                eventAdd:
                eventChange:
                eventRemove:
                */
        }
        }
    }
}

</script>

<style>

</style>