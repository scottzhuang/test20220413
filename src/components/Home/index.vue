<template>
      <main class="l-main">
        <!-- ===== HOME ===== -->
        <section class="home bd-grid" id="home">
            <div class="home__data">
                <h1 class="home__title">Hi, <br>I'm <span class="home__title-color">莊晉翔</span><br> Web Designer</h1>
                <a href="#" class="button">Contact</a>
            </div>

            <div class="home__social">
                <a href="#" class="home__social-icon"><i class='bx bxl-linkedin-square'></i></a>
                <a href="#" class="home__social-icon"><i class='bx bxl-instagram' ></i></a>
                <a href="https://github.com/scottJinXiang" class="home__social-icon"><i class='bx bxl-github' ></i></a>
            </div>

            <div class="home__img">
                <img src="./images/scott01.jpg" alt="">
            </div>
            
        </section>

        <!-- ===== ABOUT ===== -->
        <section class="about section " id="about">
            <h2 class="section-title">About</h2>

            <div class="about__container bd-grid">
                <div class="about__img">
                    <img src="./images/scott02.jpg" alt="">
                </div>

                <div>
                    <h2 class="about__subtitle">I'am Scott</h2>
                    <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>
                </div>
            </div>
        </section>
        <!-- ===== SKILLS ===== -->
        <section class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>

            <div class="skills__container bd-grid">
                <div>
                    <h2 class="skills__subtitle">Profesional Skills</h2>
                    <p class="skills__text"></p>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-html5 skills__icon'></i>
                            <span class="skills__name">HTML5</span>
                        </div>

                        <div>
                            <span class="skills__percentage">95%</span>
                        </div>
                        
                        <div class="skills__bar skills__html"></div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-css3 skills__icon' ></i>
                            <span class="skills__name">CSS3</span>
                        </div>

                        <div>
                            <span class="skills__percentage">85%</span>
                        </div>
                        
                        <div class="skills__bar skills__css"></div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-javascript skills__icon' ></i>
                            <span class="skills__name">JAVASCRIPT</span>
                        </div>

                        <div>
                            <span class="skills__percentage">65%</span>
                        </div>
                        
                        <div class="skills__bar skills__js"></div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-python skills__icon'></i>
                            <span class="skills__name">PYTHON</span>
                        </div>

                        <div>
                            <span class="skills__percentage">75%</span>
                        </div>
                        
                        <div class="skills__bar skills__python"></div>
                    </div>

                    <div class="skills__data">
                        <div class="skills__names">
                            <i class='bx bxl-github skills__icon' ></i>
                            <span class="skills__name">GITHUB</span>
                        </div>

                        <div>
                            <span class="skills__percentage">55%</span>
                        </div>
                        
                        <div class="skills__bar skills__github"></div>
                    </div>

                </div>
                <div class="skills__img">
                    <img src="./images/scott02.jpg" alt="" >
                </div>
            </div>
        </section>
        <!-- ===== WORK ===== -->
        <section class="work section" id="work">
            <h2 class="section-title">Work</h2>

            <div class="work__container bd-grid">
                <div class="work__img">
                    <a href="https://github.com/scottJinXiang/FaceSwap_application">
                        <img src="./images/faceswapimg.png" alt="" title="https://github.com/scottJinXiang/FaceSwap_application">
                    </a>
                </div>

                <div class="work__img">
                    <img src="./images/scott02.jpg" alt="">
                </div>

                <div class="work__img">
                    <img src="./images/scott02.jpg" alt="">
                </div>

                <div class="work__img">
                    <img src="./images/scott02.jpg" alt="">
                </div>

                <div class="work__img">
                    <img src="./images/scott02.jpg" alt="">
                </div>

                <div class="work__img">
                    <img src="./images/scott02.jpg" alt="">
                </div>
            </div>
        </section>
        <!-- ===== CONTACT ===== -->
        <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>

            <div class="contact__container bd-grid">
                <form action="" class="contact__form">
                    <input type="text" placeholder="Name" class="contact__input">
                    <input type="mail" placeholder="Email" class="contact__input">
                    <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>

                    <input type="button" value="Enviar" class="contact__button button">
                </form>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name:''
}
</script>
    
<style>

</style>