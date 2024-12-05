<template>
    <div>
        <div class="">

            <div class="position-relative bg-dark" style="width:auto; height: 100vh;object-fit: cover;">
                <img src="/img/bannerDesktop.jpg" alt="" class="d-none d-md-block" style="width: 100%; height: 100%; object-fit: cover;">
                <img src="/img/bannerMobile.jpg" alt="" class="d-md-none" style="width: 100%; height: 100%; object-fit: cover;">
                <div class="center-content">
                    <h1 class="text-capitalize method1">
                        <span class="fw-bold text-uppercase">Let's Glow</span> <br> in your network with<br><span
                            class="fw-bold text-uppercase">Covisor Biz</span><br>
                    </h1>
                    <button class="btn text-dark fw-bold"
                    style="background: var(--bg-glow)">Get
                        Started</button>
                </div>
            </div>



        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style>


.center-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
</style>