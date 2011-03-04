var Hora = function (valorHora) {

    function limpiar(v) {
        if (v) {
            if (v.length == 4) { v = '0' + v; }
            return v;

        }
        else {
            return '00:00';
        }
    }

    var valor = limpiar(valorHora);

    return {
        valorHora: function () {
            return valor.substring(0, 2);
        },
        valorMinutos: function () {
            return valor.substring(3, 5);
        },
        valorCompleto: function () {
            return limpiar(valor);
        },
        sumarHora: function (nuevaHora) {
            nuevaHora = limpiar(nuevaHora);

            var b = new Hora(nuevaHora);

            var h = parseInt(this.valorHora().toString(), 10) + parseInt(b.valorHora().toString(), 10);
            var m = parseInt(this.valorMinutos().toString(), 10) + parseInt(b.valorMinutos().toString(), 10);

            h = parseInt(h.toString(), 10);
            if (h.toString().length == 1) {
                h = "0" + h;
            }

            m = parseInt(m.toString(), 10);
            if (m.toString().length == 1) {
                m = "0" + m;
            }

            return limpiar(h + ":" + m);

        },
        esMayor: function (nuevaHora) {
            nuevaHora = limpiar(nuevaHora);

            var horasMenor = parseInt(nuevaHora.substring(0, 2),10);
            var minutosMenor = parseInt(nuevaHora.substring(3, 5),10);

            var horasMayor = parseInt(valor.substring(0, 2),10);
            var minutosMayor = parseInt(valor.substring(3, 5),10);

            if (horasMenor > horasMayor) {
                return false;
            }
            if (horasMenor == horasMayor) {
                if (minutosMenor >= minutosMayor) {
                    return false;
                }
            }
            return true;
        },
        estaFueraLimite: function (limite) {

            if (this.valorHora() > limite) {
                return true;
            }
            if (this.valorHora() == limite && this.valorMinutos() > 0) {
                return true;
            }
            return false;
        },
        tieneMenosDe: function (minimo) {

            if (this.valorHora() < minimo) {
                return true;
            }
            if (this.valorHora() == minimo && this.valorMinutos() < 0) {
                return true;
            }
            return false;
        }

    };
};