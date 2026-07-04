class Puntaje {
private:
    int puntos;
    int nivel;
    int puntosParaSubirNivel;

public:
    Puntaje();

    void sumar(int n);
    void restarVida();
    int  getNivel() const;
    int  getPuntos() const;
    void reset();
};
