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
    // Returns the result of multiplying the matrix from the right by the argument.
    // If the argument is a scalar then just multiply all the elements. If the argument is
    // a vector, a vector is returned, which saves you having to remember calling
    // col(1) on the result.
    // Returns element (i,j) of the matrix
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





// Identity matrix of size n
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

var BLEND = BLEND || {};

BLEND.Util = BLEND.Util || {};

BLEND.Util.VendorPrefix = "";
BLEND.Util.DetectVendorPrefix = function() {
    var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1];
    BLEND.Util.VendorPrefix = pre[0].toUpperCase() + pre.substr(1) + "Transform";
}
BLEND.Util.DetectVendorPrefix();
BLEND.TransformElement = function(t) {
    
    var elm=t.el, src=t.src, dest=t.dest;
    
    
    var L = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]];
    var R = [0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < 4; i++) {
        L[i] = [];
        L[i][0] = L[i + 4][3] = src[i].x;
        L[i][1] = L[i + 4][4] = src[i].y;
        L[i][2] = L[i + 4][5] = 1;
        L[i][3] = L[i][4] = L[i][5] = L[i + 4][0] = L[i + 4][1] = L[i + 4][2] = 0;
        L[i][6] = -src[i].x * dest[i].x;
        L[i][7] = -src[i].y * dest[i].x;
        L[i + 4][6] = -src[i].x * dest[i].y;
        L[i + 4][7] = -src[i].y * dest[i].y;

        R[i] = dest[i].x;
        R[i + 4] = dest[i].y;
    }

    var RM = [];
    for (i = 0; i < R.length; i++) {
        RM[i] = [R[i]];
    }

    var Left = Matrix.create(L);
    var Right = Matrix.create(R);

    var res = Matrix.calculate(Left, Right);

    if (BLEND.Util.VendorPrefix == 'WebkitTransform') {

        var matrix3D = new CSSMatrix();
        matrix3D.m11 = res.get(0, 0);
        matrix3D.m12 = res.get(3, 0);
        matrix3D.m13 = 0;
        matrix3D.m14 = res.get(6, 0);

        matrix3D.m21 = res.get(1, 0);
        matrix3D.m22 = res.get(4, 0);
        matrix3D.m23 = 0;
        matrix3D.m24 = res.get(7, 0);

        matrix3D.m31 = 0;
        matrix3D.m32 = 0;
        matrix3D.m33 = 1;
        matrix3D.m34 = 0;

        matrix3D.m41 = res.get(2, 0);
        matrix3D.m42 = res.get(5, 0);
        matrix3D.m43 = 0;
        matrix3D.m44 = 1;

        elm.style.webkitTransform = matrix3D;
    } else {
        if (BLEND.Util.VendorPrefix === "")
            BLEND.Util.DetectVendorPrefix();
        elm.style[BLEND.Util.VendorPrefix] = "matrix3d(" + res.get(0, 0) + "," + res.get(3, 0) + ", 0," + res.get(6, 0) + "," + res.get(1, 0) + "," + res.get(4, 0) + ", 0," + res.get(7, 0) + ",0, 0, 1, 0," + res.get(2, 0) + "," + res.get(5, 0) + ", 0, 1)";
    }
}

BLEND.generateGrid = function(w, h, wrapper, elements, d) {
    var t = this;
    t.w = w, t.h = h, t.wrap = wrapper, t.elms = elements;
    this.p = [];
    this.dec = d;
    var cols = Math.floor(document.querySelector(t.wrap).clientWidth / t.w);
    var c = Math.floor(document.querySelector(t.wrap).clientWidth / t.w + 1);
    var r = Math.ceil(document.querySelector(t.wrap).clientHeight / t.h) + 1;
    var vc = c * r;
    for (i = 0; i < vc; i++) {
        var l = {
            x: Math.floor(i % c) * t.w,
            y: Math.floor(i / c) * t.h,
            x2: Math.floor(i % c) * t.w,
            y2: Math.floor(i / c) * t.h
        };
        this.p.push(l);
    }
    var m = m || {};
    m.Grid = function() {
        this.elms = [];
        this.init();
    }, m.Grid.prototype = {
        init: function() {
            this.createTiles();
        },
        animateTile: function() {
            var e = this;
            for (i = 0; i < e.elms.length; i++) {
                e.elms[i].update();
            }
            
            this.animateTile.call(this);
            requestAnimationFrame($.proxy(this.animateTile, this));
//              requestAnimationFrame(m.animateTile);
        },
        createTiles: function() {
            var c = this;
            var elements=document.querySelectorAll('.tile');
            for (var i = 0; i < elements.length; i++) {
                c.elms.push(new m.tile(elements[i], i));
            }
            c.animateTile();
        }
    }, m.tile = function(e, i) {

        this.el = e;
        this.i = i;
        this.p = t.p;

        this.elX = Math.floor(i % cols) * t.w,
        this.elY = Math.floor(i / cols) * t.h,
        this.p1 = this.p[i + Math.floor(i / cols)],
        this.p2 = this.p[i + Math.floor(i / cols) + 1],
        this.p3 = this.p[i + Math.floor(i / cols) + cols + 2],
        this.p4 = this.p[i + Math.floor(i / cols) + cols + 1];
        this.init();
    }, m.tile.prototype = {
        init: function() {
            var e = this;
            var ct=e.el;
            ct.addEventListener('click',function(){
                TweenMax.killTweensOf(e.p1),
                TweenMax.killTweensOf(e.p2),
                TweenMax.killTweensOf(e.p3),
                TweenMax.killTweensOf(e.p4);

                TweenMax.to(e.p1, .8, {
                    x: e.p1.x2,
                    y: e.p1.y2,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p2, .8, {
                    x: e.p2.x2,
                    y: e.p2.y2,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p3, .8, {
                    x: e.p3.x2,
                    y: e.p3.y2,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p4, .8, {
                    x: e.p4.x2,
                    y: e.p4.y2,
                    ease: Back.easeOut
                });
            },false);
            ct.addEventListener('mouseover',function(){
                TweenMax.killTweensOf(e.p1),
                TweenMax.killTweensOf(e.p2),
                TweenMax.killTweensOf(e.p3),
                TweenMax.killTweensOf(e.p4);
                TweenMax.to(e.p1, .3, {
                    x: e.p1.x2 - t.dec,
                    y: e.p1.y2 - t.dec,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p2, .3, {
                    x: e.p2.x2 + t.dec,
                    y: e.p2.y2 - t.dec,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p3, .3, {
                    x: e.p3.x2 + t.dec,
                    y: e.p3.y2 + t.dec,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p4, .3, {
                    x: e.p4.x2 - t.dec,
                    y: e.p4.y2 + t.dec,
                    ease: Back.easeOut
                });
            },false);
            ct.addEventListener('mouseout',function(){
                TweenMax.killTweensOf(e.p1),
                TweenMax.killTweensOf(e.p2),
                TweenMax.killTweensOf(e.p3),
                TweenMax.killTweensOf(e.p4);

                TweenMax.to(e.p1, .8, {
                    x: e.p1.x2,
                    y: e.p1.y2,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p2, .8, {
                    x: e.p2.x2,
                    y: e.p2.y2,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p3, .8, {
                    x: e.p3.x2,
                    y: e.p3.y2,
                    ease: Back.easeOut
                }),
                TweenMax.to(e.p4, .8, {
                    x: e.p4.x2,
                    y: e.p4.y2,
                    ease: Back.easeOut
                });
            },false);
        },
        deflateTile:function(e){
            
        },
        inflateTile:function(e){
            
        },
        update: function() {
            var e = this;
            BLEND.TransformElement(
            {
                el: e.el,
                src: [{x: 0, y: 0}, {x: w, y: 0}, {x: w, y: h}, {x: 0, y: h}],
                dest: [
                    {x: e.p1.x - e.elX,
                        y: e.p1.y - e.elY},
                    {x: e.p2.x - e.elX,
                        y: e.p2.y - e.elY},
                    {x: e.p3.x - e.elX,
                        y: e.p3.y - e.elY},
                    {x: e.p4.x - e.elX,
                        y: e.p4.y - e.elY},
                ]
            });
        }
    };
    t.grid = new m.Grid();
}