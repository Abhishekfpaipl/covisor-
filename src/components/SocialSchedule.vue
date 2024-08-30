<template>
    <div v-if="user.schedule" class="container my-3 py-3">

        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Working Hours ~</span></p>
        <div class="d-flex justify-content-center">
            <div class="container row row-cols-2 row-cols-md-3 g-2 justify-content-center align-items-center">
                <div class="col " v-for="(schedule, index) in user.schedule" :key="index">
                    <div
                        class="card card-body bg-light text-secondary d-flex flex-column justify-content-center align-items-center ">
                        <i class="bi bi-clock-fill fs-1 my-2"></i>
                        <div class="d-flex flex-column justify-content-center align-items-center small">

                            <span class="fw-bold">{{ schedule.start_time }}</span> to
                            <span class="fw-bold mb-2"> {{ schedule.end_time }}</span>
                            <div class="d-flex gap-1 align-items-center flex-wrap justify-content-center">
                                <div class="" v-for="(day, dayIndex) in schedule.days" :key="dayIndex">
                                    <span class="truncate3">
                                        <span class="">{{ day.slice(0,3) }}</span>
                                        <span v-if="index !== schedule.days.length - 1">,</span>
                                    </span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

export default {
    name: 'SocialSchedule',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            test: [
                {
                    id: 1,
                    weeks: [
                        { day: 'Mon' },
                        { day: 'Tue' },
                        { day: 'Wed' },
                        { day: 'Thu' },
                        { day: 'Fri' },
                        { day: 'Sat' },
                        { day: 'Sun' },
                    ],
                },
                // {
                //     id: 2,
                //     weeks: [
                //         { day: 'Sat' },
                //     ],
                // },
                // {
                //     id: 3,
                //     weeks: [
                //         { day: 'Sun' },
                //     ],
                // }
            ]
        }
    }

}
</script>

<style lang="scss" scoped></style>