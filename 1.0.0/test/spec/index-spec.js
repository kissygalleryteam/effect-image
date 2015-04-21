KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('effect-image', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/effect-image/1.0.0/']});