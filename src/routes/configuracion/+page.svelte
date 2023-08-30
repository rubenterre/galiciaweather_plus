<script>
    export let data;
</script>
<section>
    <div class="container">
        <div class="row">
            <div class="col s12 center-align">
                <div class="logo">
                    <img src="GaliciaWeather.gif" alt="" width="40%">
                </div>
                <h4 class="about-tit">GaliciaWeather Plus</h4>
                <p class="about-version">Versión 3.2.1.</p>
                <p class="about-txt">Esta aplicación está susentada pola base de datos de Openweathermaps.</p>

<div class="botonesLegal">
    <a href="/privacidade">
        <div class="botonesLegal-btn">
            <h4>POLÍTICA DE PRIVACIDADE</h4>
        </div>
    </a>
</div>

                <p class="about-txt">
                    Desenvolto por Rubén Terré.
                </p>
                <img class="center logo_RT" src="Ruben_Terre_Logo_blanco_131119.svg" alt="logo Rubén Terré" width="40%">
                <p class="about-txt">
                    Para máis información sobre os meus traballos visita a miña web en <a
                        href="https://www.rubenterre.com">www.rubenterre.com</a> ou a través dos seguintes
                    canais:
                </p>

                <div class="col s12 icon_contact">
                   
                        <a href="https://www.behance.net/rubenterre">
                            <img src="behance-square-brands_white.svg" width="15%" alt="Benhance link">
                        </a>
               
                        <a href="https://github.com/rubenterre">
                            <img src="github-square-brands_white.svg" width="15%"
                                alt="Github link"></a>
             
                        <a href="https://www.linkedin.com/in/rubenterrelameiro">
                            <img
                                src="linkedin-brands_white.svg" width="15%" alt="Linkedin link"></a>
                 </div>


                <h4 class="about-tit">MIT License</h4>

                <p class="about-version">Copyright (c) 2020 Rubén Terré - Diseño & Desarrollo web</p>

                <p class="licencia-txt">Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:</p>

                <p class="licencia-txt">The above copyright notice and this permission notice shall be included in
                    all
                    copies or substantial portions of the Software.</p>

                <p class="licencia-txt">THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                </p>

            </div>

        </div>
    </div>
</section>

<style>
    section {
        background-color: #0d1b2a;
        margin: 0px;
        padding-top: 50px;
        padding-bottom: 80px;
        height: 100%;
        width: 100vw;
    }

    .logo_RT {
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .icon_contact {
        margin-top: 40px;
        margin-bottom: 40px;
    }

    /* botones legales */

    .botonesLegal{
        margin: 20px 20px;
    }

    .botonesLegal-btn{
        background-color: #1b263b;
        border-radius: 12px;
		border: 1px solid #415a77;
        margin-left: 10px;
		margin-right: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
    }

    .botonesLegal-btn h4{
        font-family: SFProText-Medium;
		font-size: 14px;
		color: #e0e1dd;
		letter-spacing: 1px;
		margin-top: 15px;
    }


    /* Sobre esta aplicación */

    .about-tit {
        color: white;
        font-family: SFProText-Medium;
        font-size: 18px;
        font-weight: 600;
        text-align: center;
    }

    .about-version {
        color: white;
        font-family: SFProText-Regular;
        font-size: 12px;
        font-weight: 300;
        text-align: center;
    }

    .about-txt {
        color: white;
        font-family: SFProText-Regular;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
        padding-top: 20px;
    }

    .about-textoDos {
        padding-top: 40px;
        margin-top: 40px;
    }

    /* Licencia */

    .licencia-txt {
        color: white;
        font-family: SFProText-Regular;
        font-size: 11px;
        font-weight: 300;
        text-align: justify;
        padding-top: 20px;
    }
</style>