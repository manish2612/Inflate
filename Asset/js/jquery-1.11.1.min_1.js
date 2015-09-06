/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){
    "object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){
        if(!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
        }:b(a)
    }("undefined"!=typeof window?window:this,function(a,b){
    var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){
        return new m.fn.init(a,b)
        },n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){
        return b.toUpperCase()
        };
        
    m.fn=m.prototype={
        jquery:l,
        constructor:m,
        selector:"",
        length:0,
        toArray:function(){
            return d.call(this)
            },
        get:function(a){
            return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)
            },
        pushStack:function(a){
            var b=m.merge(this.constructor(),a);
            return b.prevObject=this,b.context=this.context,b
            },
        each:function(a,b){
            return m.each(this,a,b)
            },
        map:function(a){
            return this.pushStack(m.map(this,function(b,c){
                return a.call(b,c,b)
                }))
            },
        slice:function(){
            return this.pushStack(d.apply(this,arguments))
            },
        first:function(){
            return this.eq(0)
            },
        last:function(){
            return this.eq(-1)
            },
        eq:function(a){
            var b=this.length,c=+a+(0>a?b:0);
            return this.pushStack(c>=0&&b>c?[this[c]]:[])
            },
        end:function(){
            return this.prevObject||this.constructor(null)
            },
        push:f,
        sort:c.sort,
        splice:c.splice
        },m.extend=m.fn.extend=function(){
        var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;
        for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g
        },m.extend({
        expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),
        isReady:!0,
        error:function(a){
            throw new Error(a)
            },
        noop:function(){},
        isFunction:function(a){
            return"function"===m.type(a)
            },
        isArray:Array.isArray||function(a){
            return"array"===m.type(a)
            },
        isWindow:function(a){
            return null!=a&&a==a.window
            },
        isNumeric:function(a){
            return!m.isArray(a)&&a-parseFloat(a)>=0
            },
        isEmptyObject:function(a){
            var b;
            for(b in a)return!1;return!0
            },
        isPlainObject:function(a){
            var b;
            if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;
            try{
                if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1
                    }catch(c){
                return!1
                }
                if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)
            },
        type:function(a){
            return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a
            },
        globalEval:function(b){
            b&&m.trim(b)&&(a.execScript||function(b){
                a.eval.call(a,b)
                })(b)
            },
        camelCase:function(a){
            return a.replace(o,"ms-").replace(p,q)
            },
        nodeName:function(a,b){
            return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()
            },
        each:function(a,b,c){
            var d,e=0,f=a.length,g=r(a);
            if(c){
                if(g){
                    for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break
                    }else for(e in a)if(d=b.apply(a[e],c),d===!1)break
                    }else if(g){
                for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break
                }else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a
            },
        trim:function(a){
            return null==a?"":(a+"").replace(n,"")
            },
        makeArray:function(a,b){
            var c=b||[];
            return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c
            },
        inArray:function(a,b,c){
            var d;
            if(b){
                if(g)return g.call(b,a,c);
                for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c
                    }
                    return-1
            },
        merge:function(a,b){
            var c=+b.length,d=0,e=a.length;
            while(c>d)a[e++]=b[d++];
            if(c!==c)while(void 0!==b[d])a[e++]=b[d++];
            return a.length=e,a
            },
        grep:function(a,b,c){
            for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);
            return e
            },
        map:function(a,b,c){
            var d,f=0,g=a.length,h=r(a),i=[];
            if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)
            },
        guid:1,
        proxy:function(a,b){
            var c,e,f;
            return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){
                return a.apply(b||this,c.concat(d.call(arguments)))
                },e.guid=a.guid=a.guid||m.guid++,e):void 0
            }
    })
});
