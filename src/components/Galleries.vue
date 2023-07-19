<template>
    <section>
        <Splide>
            <SplideSlide>
                <img src="/images/muay-thai-battle.jpg" alt="">
            </SplideSlide>
        </Splide>


        <Splide :has-track="false">
            <SplideTrack>
                <SplideSlide>...</SplideSlide>
            </SplideTrack>
        </Splide>
    </section>
</template>