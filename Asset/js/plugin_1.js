(function($) {

    $.fn.inflate = function(options) {

        // Establish our default settings w, h, wrapper, elements, d
        var settings = $.extend({
            width: 200,
            height: 200,
            elements: null,
            scale: 30
        }, options);
        //h.w = settings.width, h.h = settings.height, h.wrap = settings.wrapper, h.elms = settings.elements, this.p = [], this.dec = settings.scale;

        var CSSMatrix = function(h) {
            if (!h || h === "none") {
                for (var g = 0; g < 16; g++) {
                    this["m" + ((g / 4 | 0) + 1) + (g % 4 + 1)] = g % 4 == (g / 4 | 0) ? 1 : 0
                }
                return this
            }
            return this.setMatrixValue(h)
        };
        CSSMatrix.prototype = {constructor: CSSMatrix, PID180: Math.PI / 180, get a() {
                return this.m11
            }, get b() {
                return this.m21
            }, get c() {
                return this.m12
            }, get d() {
                return this.m22
            }, get e() {
                return this.m13
            }, get f() {
                return this.m23
            }, set a(g) {
                this.m11 = g
            }, set b(g) {
                this.m21 = g
            }, set c(g) {
                this.m12 = g
            }, set d(g) {
                this.m22 = g
            }, set e(g) {
                this.m13 = g
            }, set f(g) {
                this.m23 = g
            }, inverse: function() {
                var g = this.__clone__();
                g.m11 = g.m23 * g.m34 * g.m42 - g.m24 * g.m33 * g.m42 + g.m24 * g.m32 * g.m43 - g.m22 * g.m34 * g.m43 - g.m23 * g.m32 * g.m44 + g.m22 * g.m33 * g.m44;
                g.m12 = g.m14 * g.m33 * g.m42 - g.m13 * g.m34 * g.m42 - g.m14 * g.m32 * g.m43 + g.m12 * g.m34 * g.m43 + g.m13 * g.m32 * g.m44 - g.m12 * g.m33 * g.m44;
                g.m13 = g.m13 * g.m24 * g.m42 - g.m14 * g.m23 * g.m42 + g.m14 * g.m22 * g.m43 - g.m12 * g.m24 * g.m43 - g.m13 * g.m22 * g.m44 + g.m12 * g.m23 * g.m44;
                g.m14 = g.m14 * g.m23 * g.m32 - g.m13 * g.m24 * g.m32 - g.m14 * g.m22 * g.m33 + g.m12 * g.m24 * g.m33 + g.m13 * g.m22 * g.m34 - g.m12 * g.m23 * g.m34;
                g.m21 = g.m24 * g.m33 * g.m41 - g.m23 * g.m34 * g.m41 - g.m24 * g.m31 * g.m43 + g.m21 * g.m34 * g.m43 + g.m23 * g.m31 * g.m44 - g.m21 * g.m33 * g.m44;
                g.m22 = g.m13 * g.m34 * g.m41 - g.m14 * g.m33 * g.m41 + g.m14 * g.m31 * g.m43 - g.m11 * g.m34 * g.m43 - g.m13 * g.m31 * g.m44 + g.m11 * g.m33 * g.m44;
                g.m23 = g.m14 * g.m23 * g.m41 - g.m13 * g.m24 * g.m41 - g.m14 * g.m21 * g.m43 + g.m11 * g.m24 * g.m43 + g.m13 * g.m21 * g.m44 - g.m11 * g.m23 * g.m44;
                g.m24 = g.m13 * g.m24 * g.m31 - g.m14 * g.m23 * g.m31 + g.m14 * g.m21 * g.m33 - g.m11 * g.m24 * g.m33 - g.m13 * g.m21 * g.m34 + g.m11 * g.m23 * g.m34;
                g.m31 = g.m22 * g.m34 * g.m41 - g.m24 * g.m32 * g.m41 + g.m24 * g.m31 * g.m42 - g.m21 * g.m34 * g.m42 - g.m22 * g.m31 * g.m44 + g.m21 * g.m32 * g.m44;
                g.m32 = g.m14 * g.m32 * g.m41 - g.m12 * g.m34 * g.m41 - g.m14 * g.m31 * g.m42 + g.m11 * g.m34 * g.m42 + g.m12 * g.m31 * g.m44 - g.m11 * g.m32 * g.m44;
                g.m33 = g.m12 * g.m24 * g.m41 - g.m14 * g.m22 * g.m41 + g.m14 * g.m21 * g.m42 - g.m11 * g.m24 * g.m42 - g.m12 * g.m21 * g.m44 + g.m11 * g.m22 * g.m44;
                g.m34 = g.m14 * g.m22 * g.m31 - g.m12 * g.m24 * g.m31 - g.m14 * g.m21 * g.m32 + g.m11 * g.m24 * g.m32 + g.m12 * g.m21 * g.m34 - g.m11 * g.m22 * g.m34;
                g.m41 = g.m23 * g.m32 * g.m41 - g.m22 * g.m33 * g.m41 - g.m23 * g.m31 * g.m42 + g.m21 * g.m33 * g.m42 + g.m22 * g.m31 * g.m43 - g.m21 * g.m32 * g.m43;
                g.m42 = g.m12 * g.m33 * g.m41 - g.m13 * g.m32 * g.m41 + g.m13 * g.m31 * g.m42 - g.m11 * g.m33 * g.m42 - g.m12 * g.m31 * g.m43 + g.m11 * g.m32 * g.m43;
                g.m43 = g.m13 * g.m22 * g.m41 - g.m12 * g.m23 * g.m41 - g.m13 * g.m21 * g.m42 + g.m11 * g.m23 * g.m42 + g.m12 * g.m21 * g.m43 - g.m11 * g.m22 * g.m43;
                g.m44 = g.m12 * g.m23 * g.m31 - g.m13 * g.m22 * g.m31 + g.m13 * g.m21 * g.m32 - g.m11 * g.m23 * g.m32 - g.m12 * g.m21 * g.m33 + g.m11 * g.m22 * g.m33;
                return g.scale(1 / g.__determinant__())
            }, multiply: function(g) {
                return this.__multiplyMatrices__(this.__clone__(), g)
            }, __multiplyMatrices__: function(g, h) {
                h.m11 = h.m11 * g.m11 + h.m12 * g.m21 + h.m13 * g.m31 + h.m14 * g.m41;
                h.m12 = h.m11 * g.m12 + h.m12 * g.m22 + h.m13 * g.m32 + h.m14 * g.m42;
                h.m13 = h.m11 * g.m13 + h.m12 * g.m23 + h.m13 * g.m33 + h.m14 * g.m43;
                h.m14 = h.m11 * g.m14 + h.m12 * g.m24 + h.m13 * g.m34 + h.m14 * g.m44;
                h.m21 = h.m21 * g.m11 + h.m22 * g.m21 + h.m23 * g.m31 + h.m24 * g.m41;
                h.m22 = h.m21 * g.m12 + h.m22 * g.m22 + h.m23 * g.m32 + h.m24 * g.m42;
                h.m23 = h.m21 * g.m13 + h.m22 * g.m23 + h.m23 * g.m33 + h.m24 * g.m43;
                h.m24 = h.m21 * g.m14 + h.m22 * g.m24 + h.m23 * g.m34 + h.m24 * g.m44;
                h.m31 = h.m31 * g.m11 + h.m32 * g.m21 + h.m33 * g.m31 + h.m34 * g.m41;
                h.m32 = h.m31 * g.m12 + h.m32 * g.m22 + h.m33 * g.m32 + h.m34 * g.m42;
                h.m33 = h.m31 * g.m13 + h.m32 * g.m23 + h.m33 * g.m33 + h.m34 * g.m43;
                h.m34 = h.m31 * g.m14 + h.m32 * g.m24 + h.m33 * g.m34 + h.m34 * g.m44;
                h.m41 = h.m41 * g.m11 + h.m42 * g.m21 + h.m43 * g.m31 + h.m44 * g.m41;
                h.m42 = h.m41 * g.m12 + h.m42 * g.m22 + h.m43 * g.m32 + h.m44 * g.m42;
                h.m43 = h.m41 * g.m13 + h.m42 * g.m23 + h.m43 * g.m33 + h.m44 * g.m43;
                h.m44 = h.m41 * g.m14 + h.m42 * g.m24 + h.m43 * g.m34 + h.m44 * g.m44;
                return h
            }, multiplyLeft: function(g) {
                return this.__multiplyMatrices__(g, this.__clone__())
            }, rotate: function(i, h, g) {
                if (i && !(h && g)) {
                    return this.__rotateX__(i)
                } else {
                    if (h && !(i && g)) {
                        return this.__rotateY__(h)
                    } else {
                        if (g && !(i && h)) {
                            return this.__rotateZ__(g)
                        }
                    }
                }
                h = h || i;
                g = g || g;
                return this.__rotateX__(i).__rotateY__(h).__rotateZ__(g)
            }, __rotateX__: function(i) {
                var j = Math.cos(-i * Math.PI / 180), h = Math.sin(-i * Math.PI / 180), g = this.__clone__();
                g.m12 = j * this.m12 + h * this.m13;
                g.m22 = j * this.m22 + h * this.m23;
                g.m32 = j * this.m32 + h * this.m33;
                g.m42 = j * this.m42 + h * this.m43;
                g.m13 = j * this.m13 - h * this.m12;
                g.m23 = j * this.m23 - h * this.m22;
                g.m33 = j * this.m33 - h * this.m32;
                g.m43 = j * this.m43 - h * this.m42;
                return g
            }, __rotateY__: function(i) {
                var j = Math.cos(-i * this.PID180), h = Math.sin(-i * this.PID180), g = this.__clone__();
                g.m11 = j * this.m11 - h * this.m13;
                g.m21 = j * this.m21 - h * this.m23;
                g.m31 = j * this.m31 - h * this.m33;
                g.m41 = j * this.m41 - h * this.m43;
                g.m13 = j * this.m13 + h * this.m11;
                g.m23 = j * this.m23 + h * this.m21;
                g.m33 = j * this.m33 + h * this.m31;
                g.m43 = j * this.m43 + h * this.m41;
                return g
            }, __rotateZ__: function(i) {
                var j = Math.cos(-i * this.PID180), h = Math.sin(-i * this.PID180), g = this.__clone__();
                g.m11 = j * this.m11 + h * this.m12;
                g.m21 = j * this.m21 + h * this.m22;
                g.m31 = j * this.m31 + h * this.m32;
                g.m41 = j * this.m41 + h * this.m42;
                g.m12 = j * this.m12 - h * this.m11;
                g.m22 = j * this.m22 - h * this.m21;
                g.m32 = j * this.m32 - h * this.m31;
                g.m42 = j * this.m42 - h * this.m41;
                return g
            }, rotateAxisAngle: function(g, m, k, j) {
                m = m || g;
                k = k || m;
                if (g === 1 && m === 0 && k === 0) {
                    return this.__rotateX__(j)
                } else {
                    if (g === 0 && m === 1 && k === 0) {
                        return this.__rotateY__(j)
                    } else {
                        if (g === 0 && m === 0 && k === 1) {
                            return this.__rotateZ__(j)
                        }
                    }
                }
                var i = new CSSMatrix(), l = Math.cos(j) * this.PID180, h = Math.sin(j) * this.PID180;
                i.m11 = l + g * g * (1 - l);
                i.m12 = g * m * (1 - l) - k * h;
                i.m13 = g * k * (1 - l) + m * h;
                i.m21 = m * g * (1 - l) + k * h;
                i.m22 = l + m * m * (1 - l);
                i.m23 = m * k * (1 - l) - g * h;
                i.m31 = k * g * (1 - l) - m * h;
                i.m32 = k * m * (1 - l) + g * h;
                i.m33 = l + k * k * (1 - l);
                return this.__clone__().multiply(i)
            }, scale: function(j, i, g) {
                i = i || j;
                g = g || 1;
                var h = this.__clone__();
                h.m11 *= j;
                h.m21 *= i;
                h.m31 *= g;
                h.m12 *= j;
                h.m22 *= i;
                h.m32 *= g;
                h.m13 *= j;
                h.m23 *= i;
                h.m33 *= g;
                h.m13 *= j;
                h.m24 *= i;
                h.m34 *= g;
                return h
            }, setMatrixValue: function(j) {
                var g = j.match(/[+-]?\d*[.]?\d+(?=,|\))/g);
                for (var h = 0; h < 16; h++) {
                    this["m" + ((h / 4 | 0) + 1) + (h % 4 + 1)] = Number(g[h])
                }
                return this
            }, skewX: function(h) {
                h *= this.PID180;
                var g = this.__clone__();
                g.m21 = Math.tan(h);
                return g
            }, skewY: function(h) {
                h *= this.PID180;
                var g = this.__clone__();
                g.m12 = Math.tan(h);
                return g
            }, toString: function() {
                var h = this.m11.toFixed(6);
                for (var g = 1; g < 16; g++) {
                    h += "," + (this["m" + ((g / 4 | 0) + 1) + (g % 4 + 1)]).toFixed(6)
                }
                return"matrix3d(" + h + ")"
            }, translate: function(h, j, i) {
                var g = this.__clone__(), i = i || 0;
                g.m41 = g.m11 * h + g.m21 * j + g.m31 * i + g.m41;
                g.m42 = g.m12 * h + g.m22 * j + g.m32 * i + g.m42;
                g.m43 = g.m13 * h + g.m14 * j + g.m33 * i + g.m43;
                g.m44 = g.m14 * h + g.m24 * j + g.m34 * i + g.m44;
                return g
            }, __determinant__: function() {
                return(this.m41 * (+this.m14 * this.m23 * this.m32 - this.m13 * this.m24 * this.m32 - this.m14 * this.m22 * this.m33 + this.m12 * this.m24 * this.m33 + this.m13 * this.m22 * this.m34 - this.m12 * this.m23 * this.m34) + this.m42 * (+this.m11 * this.m23 * this.m34 - this.m11 * this.m24 * this.m33 + this.m14 * this.m21 * this.m33 - this.m13 * this.m21 * this.m34 + this.m13 * this.m24 * this.m31 - this.m14 * this.m23 * this.m31) + this.m43 * (+this.m11 * this.m24 * this.m32 - this.m11 * this.m22 * this.m34 - this.m14 * this.m21 * this.m32 + this.m12 * this.m21 * this.m34 + this.m14 * this.m22 * this.m31 - this.m12 * this.m24 * this.m31) + this.m44 * (-this.m13 * this.m22 * this.m31 - this.m11 * this.m23 * this.m32 + this.m11 * this.m22 * this.m33 + this.m13 * this.m21 * this.m32 - this.m12 * this.m21 * this.m33 + this.m12 * this.m23 * this.m31))
            }, __clone__: function() {
                var h = new CSSMatrix();
                for (var g = 0; g < 16; g++) {
                    h["m" + ((g / 4 | 0) + 1) + (g % 4 + 1)] = this["m" + ((g / 4 | 0) + 1) + (g % 4 + 1)]
                }
                return h
            }};


        function Matrix() {
        }
        Matrix.prototype = {
            e: function(i, j) {
                if (i < 1 || i > this.elements.length || j < 1 || j > this.elements[0].length) {
                    return null;
                }
                return this.elements[i - 1][j - 1];
            },
            // Returns row k of the matrix as a vector
            row: function(i) {
                if (i > this.elements.length) {
                    return null;
                }
                return Vector.create(this.elements[i - 1]);
            },
            // Returns column k of the matrix as a vector
            col: function(j) {
                if (j > this.elements[0].length) {
                    return null;
                }
                var col = [], n = this.elements.length, k = n, i;
                do {
                    i = k - n;
                    col.push(this.elements[i][j - 1]);
                } while (--n);
                return Vector.create(col);
            },
            // Returns the number of rows/columns the matrix has
            dimensions: function() {
                return {rows: this.elements.length, cols: this.elements[0].length};
            },
            // Returns the number of rows in the matrix
            rows: function() {
                return this.elements.length;
            },
            // Returns the number of columns in the matrix
            cols: function() {
                return this.elements[0].length;
            },
            multiply: function(matrix) {
                if (!matrix.elements) {
                    return this.map(function(x) {
                        return x * matrix;
                    });
                }
                var returnVector = matrix.modulus ? true : false;
                var M = matrix.elements || matrix;
                if (typeof(M[0][0]) == 'undefined') {
                    M = Matrix.create(M).elements;
                }
                if (!this.canMultiplyFromLeft(M)) {
                    return null;
                }
                var ni = this.elements.length, ki = ni, i, nj, kj = M[0].length, j;
                var cols = this.elements[0].length, elements = [], sum, nc, c;
                do {
                    i = ki - ni;
                    elements[i] = [];
                    nj = kj;
                    do {
                        j = kj - nj;
                        sum = 0;
                        nc = cols;
                        do {
                            c = cols - nc;
                            sum += this.elements[i][c] * M[c][j];
                        } while (--nc);
                        elements[i][j] = sum;
                    } while (--nj);
                } while (--ni);
                var M = Matrix.create(elements);
                return returnVector ? M.col(1) : M;
            },
            x: function(matrix) {
                return this.multiply(matrix);
            },
            get: function(i, j) {
                return this.elements[i][j];
            },
            // Returns a submatrix taken from the matrix
            // Argument order is: start row, start col, nrows, ncols
            // Element selection wraps if the required index is outside the matrix's bounds, so you could
            // use this to perform row/column cycling or copy-augmenting.
            minor: function(a, b, c, d) {
                var elements = [], ni = c, i, nj, j;
                var rows = this.elements.length, cols = this.elements[0].length;
                do {
                    i = c - ni;
                    elements[i] = [];
                    nj = d;
                    do {
                        j = d - nj;
                        elements[i][j] = this.elements[(a + i - 1) % rows][(b + j - 1) % cols];
                    } while (--nj);
                } while (--ni);
                return Matrix.create(elements);
            },
            // Returns true iff the matrix is square
            isSquare: function() {
                return (this.elements.length == this.elements[0].length);
            },
            // Returns the determinant for square matrices
            determinant: function() {
                if (!this.isSquare()) {
                    return null;
                }
                var M = this.toRightTriangular();
                var det = M.elements[0][0], n = M.elements.length - 1, k = n, i;
                do {
                    i = k - n + 1;
                    det = det * M.elements[i][i];
                } while (--n);
                return det;
            },
            // Returns true iff the matrix is singular
            isSingular: function() {
                return (this.isSquare() && this.determinant() === 0);
            },
            // Returns a copy of the matrix
            dup: function() {
                return Matrix.create(this.elements);
            },
            // Make the matrix upper (right) triangular by Gaussian elimination.
            // This method only adds multiples of rows to other rows. No rows are
            // scaled up or switched, and the determinant is preserved.
            toRightTriangular: function() {
                var M = this.dup(), els;
                var n = this.elements.length, k = n, i, np, kp = this.elements[0].length, p;
                do {
                    i = k - n;
                    if (M.elements[i][i] == 0) {
                        for (j = i + 1; j < k; j++) {
                            if (M.elements[j][i] != 0) {
                                els = [];
                                np = kp;
                                do {
                                    p = kp - np;
                                    els.push(M.elements[i][p] + M.elements[j][p]);
                                } while (--np);
                                M.elements[i] = els;
                                break;
                            }
                        }
                    }
                    if (M.elements[i][i] != 0) {
                        for (j = i + 1; j < k; j++) {
                            var multiplier = M.elements[j][i] / M.elements[i][i];
                            els = [];
                            np = kp;
                            do {
                                p = kp - np;
                                // Elements with column numbers up to an including the number
                                // of the row that we're subtracting can safely be set straight to
                                // zero, since that's the point of this routine and it avoids having
                                // to loop over and correct rounding errors later
                                els.push(p <= i ? 0 : M.elements[j][p] - M.elements[i][p] * multiplier);
                            } while (--np);
                            M.elements[j] = els;
                        }
                    }
                } while (--n);
                return M;
            },
            // Returns true iff the matrix can multiply the argument from the left
            canMultiplyFromLeft: function(matrix) {
                var M = matrix.elements || matrix;
                if (typeof(M[0][0]) == 'undefined') {
                    M = Matrix.create(M).elements;
                }
                // this.columns should equal matrix.rows
                return (this.elements[0].length == M.length);
            },
            // Returns the result of attaching the given argument to the right-hand side of the matrix
            augment: function(matrix) {
                var M = matrix.elements || matrix;
                if (typeof(M[0][0]) == 'undefined') {
                    M = Matrix.create(M).elements;
                }
                var T = this.dup(), cols = T.elements[0].length;
                var ni = T.elements.length, ki = ni, i, nj, kj = M[0].length, j;
                if (ni != M.length) {
                    return null;
                }
                do {
                    i = ki - ni;
                    nj = kj;
                    do {
                        j = kj - nj;
                        T.elements[i][cols + j] = M[i][j];
                    } while (--nj);
                } while (--ni);
                return T;
            },
            // Returns the inverse (if one exists) using Gauss-Jordan
            inverse: function() {
                if (!this.isSquare() || this.isSingular()) {
                    return null;
                }
                var ni = this.elements.length, ki = ni, i, j;
                var M = this.augment(Matrix.I(ni)).toRightTriangular();
                var np, kp = M.elements[0].length, p, els, divisor;
                var inverse_elements = [], new_element;
                // Matrix is non-singular so there will be no zeros on the diagonal
                // Cycle through rows from last to first
                do {
                    i = ni - 1;
                    // First, normalise diagonal elements to 1
                    els = [];
                    np = kp;
                    inverse_elements[i] = [];
                    divisor = M.elements[i][i];
                    do {
                        p = kp - np;
                        new_element = M.elements[i][p] / divisor;
                        els.push(new_element);
                        // Shuffle of the current row of the right hand side into the results
                        // array as it will not be modified by later runs through this loop
                        if (p >= ki) {
                            inverse_elements[i].push(new_element);
                        }
                    } while (--np);
                    M.elements[i] = els;
                    // Then, subtract this row from those above it to
                    // give the identity matrix on the left hand side
                    for (j = 0; j < i; j++) {
                        els = [];
                        np = kp;
                        do {
                            p = kp - np;
                            els.push(M.elements[j][p] - M.elements[i][p] * M.elements[j][i]);
                        } while (--np);
                        M.elements[j] = els;
                    }
                } while (--ni);
                return Matrix.create(inverse_elements);
            },
            inv: function() {
                return this.inverse();
            },
            // Returns the result of rounding all the elements
            round: function() {
                return this.map(function(x) {
                    return Math.round(x);
                });
            },
            // Returns a copy of the matrix with elements set to the given value if they
            // differ from it by less than Sylvester.precision
            snapTo: function(x) {
                return this.map(function(p) {
                    return (Math.abs(p - x) <= Sylvester.precision) ? x : p;
                });
            },
            // Returns a string representation of the matrix
            inspect: function() {
                var matrix_rows = [];
                var n = this.elements.length, k = n, i;
                do {
                    i = k - n;
                    matrix_rows.push(Vector.create(this.elements[i]).inspect());
                } while (--n);
                return matrix_rows.join('\n');
            },
            // Set the matrix's elements from an array. If the argument passed
            // is a vector, the resulting matrix will be a single column.
            setElements: function(els) {
                var i, elements = els.elements || els;
                if (typeof(elements[0][0]) != 'undefined') {
                    var ni = elements.length, ki = ni, nj, kj, j;
                    this.elements = [];
                    do {
                        i = ki - ni;
                        nj = elements[i].length;
                        kj = nj;
                        this.elements[i] = [];
                        do {
                            j = kj - nj;
                            this.elements[i][j] = elements[i][j];
                        } while (--nj);
                    } while (--ni);
                    return this;
                }
                var n = elements.length, k = n;
                this.elements = [];
                do {
                    i = k - n;
                    this.elements.push([elements[i]]);
                } while (--n);
                return this;
            }
        };

        // Constructor function
        Matrix.create = function(elements) {
            var M = new Matrix();
            return M.setElements(elements);
        };
        Matrix.calculate = function(x, y) {
            var res = new Matrix();
            res = x.inverse();
            var mul = new Matrix();
            mul = res.multiply(y);
            return mul;
        };

        Matrix.I = function(n) {
            var els = [], k = n, i, nj, j;
            do {
                i = k - n;
                els[i] = [];
                nj = k;
                do {
                    j = k - nj;
                    els[i][j] = (i == j) ? 1 : 0;
                } while (--nj);
            } while (--n);
            return Matrix.create(els);
        };

        var Util = Util || {};

        Util.VendorPrefix = "",
                Util.DetectVendorPrefix = function() {
            var m = window.getComputedStyle(document.documentElement, ""), t = (Array.prototype.slice.call(m).join("").match(/-(moz|webkit|ms)-/) || "" === m.OLink && ["", "o"])[1];
            Util.VendorPrefix = t[0].toUpperCase() + t.substr(1) + "Transform"
        }, Util.DetectVendorPrefix()

        Util.TransformElement = function(m) {
            for (var t = m.el, e = m.src, i = m.dest, n = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]], s = [0, 0, 0, 0, 0, 0, 0, 0], h = 0; 4 > h; h++)
                n[h] = [], n[h][0] = n[h + 4][3] = e[h].x, n[h][1] = n[h + 4][4] = e[h].y, n[h][2] = n[h + 4][5] = 1, n[h][3] = n[h][4] = n[h][5] = n[h + 4][0] = n[h + 4][1] = n[h + 4][2] = 0, n[h][6] = -e[h].x * i[h].x, n[h][7] = -e[h].y * i[h].x, n[h + 4][6] = -e[h].x * i[h].y, n[h + 4][7] = -e[h].y * i[h].y, s[h] = i[h].x, s[h + 4] = i[h].y;
            var r = [];
            for (h = 0; h < s.length; h++)
                r[h] = [s[h]];
            var l = Matrix.create(n), a = Matrix.create(s), o = Matrix.calculate(l, a);
            if ("WebkitTransform" == Util.VendorPrefix) {
                var u = new CSSMatrix;
                u.m11 = o.get(0, 0), u.m12 = o.get(3, 0), u.m13 = 0, u.m14 = o.get(6, 0), u.m21 = o.get(1, 0), u.m22 = o.get(4, 0), u.m23 = 0, u.m24 = o.get(7, 0), u.m31 = 0, u.m32 = 0, u.m33 = 1, u.m34 = 0, u.m41 = o.get(2, 0), u.m42 = o.get(5, 0), u.m43 = 0, u.m44 = 1, t.style.webkitTransform = u
            } else
                "" === Util.VendorPrefix && Util.DetectVendorPrefix(), t.style[Util.VendorPrefix] = "matrix3d(" + o.get(0, 0) + "," + o.get(3, 0) + ", 0," + o.get(6, 0) + "," + o.get(1, 0) + "," + o.get(4, 0) + ", 0," + o.get(7, 0) + ",0, 0, 1, 0," + o.get(2, 0) + "," + o.get(5, 0) + ", 0, 1)"
        }

        return this.each(function() {
            var wrapper = $(this);


            //begin
            var BLEND = BLEND || {};
            BLEND.generateGrid = function() {
                var h = this;
                h.w = settings.width, h.h = settings.height, h.elms = settings.elements, this.p = [], this.dec = settings.scale;
                var r = Math.floor(wrapper.outerWidth() / h.w), l = Math.floor(wrapper.outerWidth() / h.w + 1), a = Math.ceil(wrapper.outerHeight() / h.h) + 1, o = l * a;
                for (i = 0; o > i; i++) {
                    var u = {x: Math.floor(i % l) * h.w, y: Math.floor(i / l) * h.h, x2: Math.floor(i % l) * h.w, y2: Math.floor(i / l) * h.h};
                    this.p.push(u)
                }
                var c = c || {};
                c.Grid = function() {
                    this.elms = [], this.init()
                }, c.Grid.prototype = {init: function() {
                        this.createTiles()
                    }, animateTile: function() {
                        var m = this;
                        for (i = 0; i < m.elms.length; i++)
                            m.elms[i].update();
                        requestAnimationFrame($.proxy(this.animateTile, this))
                    }, createTiles: function() {
                        for (var m = this, t = 0; t < wrapper.find("" + h.elms).length; t++)
                            m.elms.push(new c.tile(wrapper.find("" + h.elms + ":eq(" + t + ")"), t));
                        m.animateTile()
                    }
                }, c.tile = function(m, t) {
                    this.el = m, this.i = t, this.p = h.p, this.elX = Math.floor(t % r) * h.w, this.elY = Math.floor(t / r) * h.h, this.p1 = this.p[t + Math.floor(t / r)], this.p2 = this.p[t + Math.floor(t / r) + 1], this.p3 = this.p[t + Math.floor(t / r) + r + 2], this.p4 = this.p[t + Math.floor(t / r) + r + 1], this.init()
                }, c.tile.prototype = {init: function() {
                        var m = this;

                        $(m.el).click(function() {
                            TweenMax.killTweensOf(m.p1), TweenMax.killTweensOf(m.p2), TweenMax.killTweensOf(m.p3), TweenMax.killTweensOf(m.p4), TweenMax.to(m.p1, .8, {x: m.p1.x2, y: m.p1.y2, ease: Back.easeOut}), TweenMax.to(m.p2, .8, {x: m.p2.x2, y: m.p2.y2, ease: Back.easeOut}), TweenMax.to(m.p3, .8, {x: m.p3.x2, y: m.p3.y2, ease: Back.easeOut}), TweenMax.to(m.p4, .8, {x: m.p4.x2, y: m.p4.y2, ease: Back.easeOut})
                        }), $(m.el).hover(function() {
                            TweenMax.killTweensOf(m.p1), TweenMax.killTweensOf(m.p2), TweenMax.killTweensOf(m.p3), TweenMax.killTweensOf(m.p4), TweenMax.to(m.p1, .3, {x: m.p1.x2 - h.dec, y: m.p1.y2 - h.dec, ease: Back.easeOut}), TweenMax.to(m.p2, .3, {x: m.p2.x2 + h.dec, y: m.p2.y2 - h.dec, ease: Back.easeOut}), TweenMax.to(m.p3, .3, {x: m.p3.x2 + h.dec, y: m.p3.y2 + h.dec, ease: Back.easeOut}), TweenMax.to(m.p4, .3, {x: m.p4.x2 - h.dec, y: m.p4.y2 + h.dec, ease: Back.easeOut})
                        }, function() {
                            TweenMax.killTweensOf(m.p1), TweenMax.killTweensOf(m.p2), TweenMax.killTweensOf(m.p3), TweenMax.killTweensOf(m.p4), TweenMax.to(m.p1, .8, {x: m.p1.x2, y: m.p1.y2, ease: Back.easeOut}), TweenMax.to(m.p2, .8, {x: m.p2.x2, y: m.p2.y2, ease: Back.easeOut}), TweenMax.to(m.p3, .8, {x: m.p3.x2, y: m.p3.y2, ease: Back.easeOut}), TweenMax.to(m.p4, .8, {x: m.p4.x2, y: m.p4.y2, ease: Back.easeOut})
                        })
                    }, update: function() {
                        var e = this;
                        Util.TransformElement({el: e.el[0], src: [{x: 0, y: 0}, {x: h.w, y: 0}, {x: h.w, y: h.h}, {x: 0, y: h.h}], dest: [{x: e.p1.x - e.elX, y: e.p1.y - e.elY}, {x: e.p2.x - e.elX, y: e.p2.y - e.elY}, {x: e.p3.x - e.elX, y: e.p3.y - e.elY}, {x: e.p4.x - e.elX, y: e.p4.y - e.elY}]})
                    }},
                h.grid = new c.Grid;
            };
            //End

            BLEND.generateGrid();

            window.addEventListener('resize', function() {
                BLEND.generateGrid();
            }, false);

        });

    }
}(jQuery));