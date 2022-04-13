<template>
      <header class="l-header">
        <nav class="nav bd-grid">
            <div>
                <router-link to="*" class="nav__logo">Scott</router-link>
            </div>
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item"><router-link to="/home" class="nav__link active">Home</router-link></li>
                    <li class="nav__item"><router-link to="/about" class="nav__link">About</router-link></li>
                    <li class="nav__item"><router-link to="/skills" class="nav__link">Skills</router-link></li>
                    <li class="nav__item"><router-link to="/work" class="nav__link">Work</router-link></li>
                    <li class="nav__item"><router-link to="/contact" class="nav__link">Contact</router-link></li>
                </ul>
            </div>

            <div class="nav__toggle" id="nav-toggle">
                <i class='bx bx-menu'></i>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name:''
}
</script>

<style >
</style>