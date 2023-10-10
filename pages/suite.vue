<template>
    <div class="bg-black px-[24px]">
        <div class="relative mx-auto flex justify-center py-5 md:pt-[70px]">
            <img class="w-24 h-auto md:w-48" src="~/assets/img/Biepi-logo-negativo.svg" alt="Biepi logo negativo">
        </div>
        <p ref="presents" class="font-regular text-white pb-5 text-center uppercase tracking-widest text-[16px]">presents</p>
        <div ref="title">
                <h1 class="pt-10 text-white z-0 relative uppercase tracking-[0.2em] font-extralight text-center text-5xl md:text-[80px] md:font-extralight lg:text-[174px]">suite</h1>
                <p class="my-5 tracking-[0.16em] uppercase font-regular text-[24px] text-white text-center lg:text-[55px]">your home barista</p>
            </div>
        <div ref="imageUptown" class="pb-10 z-1 relative m-auto md:w-1/2 md:mt-3">
            <img src="~/assets/img/suite-frontale.png" alt="Suite frontale">
        </div>

        <div class="container max-w-[1500px] md:grid md:grid-cols-2 md:mx-auto md:mt-[100px] lg:px-6">
            <div class="sticked container mx-auto py-10 p-4 gap-5 md:gap-x-10 md:order-2 md:my-15 lg:gap-x-16">
                <div class="sticked mb-14 md:mb-auto md:sticky md:w-96 md:max-w-full md:mx-auto xl:w-[600px]">
                    <p ref="textBiepi" class="mt-6 text-white font-regular lg:text-2xl">
                        Suite is a semi-automatic espresso machine with a professional E61 lever brew group. Equipped with PID temperature control technology and shot timer, Suite is the perfect choice for the home Barista.<br><br>
                        With real wood panels and accessories in different finishes, Suite is in perfect harmony with the design of your home, making it an elegant addition to your kitchen.
                    </p>
                </div>
            </div>

            <div class="md:order-1">
                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/suite-particolare-1.png" alt="Suite particolare 1">
                </div>

                <div class="mb-10 lg:mb-24 last:mb-0">
                    <img src="~/assets/img/suite-particolare-2.png" alt="Suite particolare 2">
                </div>
            </div>
        </div>

        <div class="my-10 md:mt-[100px]">
            <p class="text-white text-[1.75rem] text-center leading-9 font-bold md:text-[2rem] md:leading-10">Technical specifications</p>
            <div class="container md:flex md:justify-between md:mx-auto md:mt-10">
                <div class="mt-5">
                    <p class="text-gold font-regular text-[1rem] leading-[1.875rem] text-center">Dimensions</p>
                    <p class="text-white font-regular text-[1.124rem] leading-[1.875rem] text-center">25 x 44 x 40 cm</p>
                </div>
                <div class="mt-5">
                    <p class="text-gold font-regular text-[1rem] leading-[1.875rem] text-center">Weight</p>
                    <p class="text-white font-regular text-[1.124rem] leading-[1.875rem] text-center">20 Kg</p>
                </div>
                <div class="mt-5">
                    <p class="text-gold font-regular text-[1rem] leading-[1.875rem] text-center">Voltage</p>
                    <p class="text-white font-regular text-[1.124rem] leading-[1.875rem] text-center">220÷240V 50/60Hz</p>
                </div>
                <div class="mt-5">
                    <p class="text-gold font-regular text-[1rem] leading-[1.875rem] text-center">Power</p>
                    <p class="text-white font-regular text-[1.124rem] leading-[1.875rem] text-center">1250 W</p>
                </div>
                <div class="mt-5">
                    <p class="text-gold font-regular text-[1rem] leading-[1.875rem] text-center">Boiler capacity</p>
                    <p class="text-white font-regular text-[1.124rem] leading-[1.875rem] text-center">1,8 L</p>
                </div>
            </div>
        </div>

        <div class="py-10 flex justify-center md:pt-[50px] lg:pt-[100px]">
            <div style="transform: translate(0px);">
                <div class="overflow-hidden">
                    <img ref="lastImage" class="max-w-full rounded-[20px]" src="~/assets/img/suite-ambientata.jpg" alt="Suite ambientata">
                </div>
            </div>
        </div>

        <!-- Footer -->
        <div class="w-[900px] flex flex-col justify-center max-w-full mx-auto my-5 lg:mb-32 xl:mb-40">
            <p class="font-bold text-[24px] text-gold leading-8 pb-7 md:leading-10 md:pt-10 md:pb-24 md:text-[48px]">Do you want more information?</p>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">call us</p>
                    <div class="mt-3 md:text-[24px]">
                        <a class="font-bold text-white underline" href="tel:00390363815511">Tel. +39 0363 815511</a>
                    </div>
                </div>

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">send us an email</p>
                    <div class="mt-3 md:text-[24px]">
                        <a class="font-bold text-white underline" href="mailto:info@biepi.net">info@biepi.net</a>
                    </div>
                </div>

                <div>
                    <p class="uppercase text-gold tracking-[.22em] font-regular text-[16px]">website</p>
                    <div class="mt-3 md:text-[24px]">
                        <a class="font-bold text-white underline" href="https://www.biepi.net/en" target="_blank">biepi.net</a>
                    </div>
                </div>
            </div>
        </div>

        <div class="py-10 text-[#858585] text-center font-regular md:py-20">
            C.F. e P.Iva: 03022890168 - REA 0342443 . Registro imprese di Bergamo - Capitale sociale 100.000,00 euro i.v.<br>
            Made by <a class="underline" href="https://www.apvd.it" target="_blank">APVD</a>
        </div>
    </div>
</template>

<script setup>
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ref, onMounted } from "vue";

const presents = ref();
const title = ref();
const imageUptown = ref();
const lastImage = ref();
const uptownFrontale = ref();
const uptownRetro = ref();

onMounted(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(presents.value,
    {
        opacity: 0
    },
    {
        opacity: 1,
        duration: 2
    });

    var tl = gsap.timeline();

    tl.fromTo(imageUptown.value,
    {
        opacity: 0,
        yPercent: 5
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        ease: "power2.out"
    });

    tl.fromTo(title.value,
    {
        opacity: 0,
        yPercent: 90
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2.5,
        ease: "power2.out"
    });

    gsap.fromTo(uptownFrontale.value,
    {
        opacity: 0,
        yPercent: 20
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        scrollTrigger: {
            trigger: uptownFrontale.value,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            once: true
        }
    });

    gsap.fromTo(uptownRetro.value,
    {
        opacity: 0,
        yPercent: 20
    },
    {
        opacity: 1,
        yPercent: 0,
        duration: 2,
        scrollTrigger: {
            trigger: uptownRetro.value,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
            once: true
        }
    });

    gsap.fromTo(lastImage.value,
    {
        opacity: 0,
        scale: 0.8
    },
    {
        opacity: 1,
        scale: 1,
        duration: 2,
        scrollTrigger: {
            trigger: lastImage.value,
            start: 'top bottom',
            end: 'bottom 30%',
            scrub: true,
            once: true
        }
    });
})
</script>

<style>
.sticked {
    --s-height: 472px;
    top: calc(50% - var(--s-height)/2);
}
</style>