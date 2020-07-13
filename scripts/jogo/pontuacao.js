class Pontuacao {
    constructor() {
        this.pontos = 0
    }

    exibePontuacao() {
        textAlign(RIGHT)
        textSize(35)
        fill('#fff')
        text(parseInt(this.pontos), width - 30, 50)
    }

    adicionarPontos() {
        this.pontos = this.pontos + 0.2
    }
}