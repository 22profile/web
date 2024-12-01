const _0x46c415 = _0xf93f;
(function (_0x5e16aa, _0xe81ce4) {
    const _0x2869c2 = _0xf93f, _0x64a5b8 = _0x5e16aa();
    while (!![]) {
        try {
            const _0xea5912 = parseInt(_0x2869c2(0x1e9)) / 0x1 * (parseInt(_0x2869c2(0x1e3)) / 0x2) + -parseInt(_0x2869c2(0x1ef)) / 0x3 + parseInt(_0x2869c2(0x1fd)) / 0x4 * (parseInt(_0x2869c2(0x215)) / 0x5) + -parseInt(_0x2869c2(0x208)) / 0x6 + -parseInt(_0x2869c2(0x1f5)) / 0x7 * (-parseInt(_0x2869c2(0x1f6)) / 0x8) + parseInt(_0x2869c2(0x1f2)) / 0x9 * (parseInt(_0x2869c2(0x1e8)) / 0xa) + -parseInt(_0x2869c2(0x1fe)) / 0xb;
            if (_0xea5912 === _0xe81ce4)
                break;
            else
                _0x64a5b8['push'](_0x64a5b8['shift']());
        } catch (_0x1b6c14) {
            _0x64a5b8['push'](_0x64a5b8['shift']());
        }
    }
}(_0x13de, 0x24348));
import * as _0x53b1eb from 'three';
const scene = new _0x53b1eb[(_0x46c415(0x1e5))]();
scene[_0x46c415(0x1e6)] = new _0x53b1eb[(_0x46c415(0x210))](0xa0908);
const camera = new _0x53b1eb[(_0x46c415(0x20b))](0x4b, window[_0x46c415(0x1fc)] / window[_0x46c415(0x203)], 0.1, 0x3e8);
camera[_0x46c415(0x20c)]['z'] = 0x5;
const _0x3e3b06 = {};
_0x3e3b06['alpha'] = !![];
const renderer = new _0x53b1eb[(_0x46c415(0x213))](_0x3e3b06);
function _0xf93f(_0x3115fc, _0x553f55) {
    const _0x3c104a = _0x13de();
    return _0xf93f = function (_0x433fae, _0x443fb9) {
        _0x433fae = _0x433fae - 0x1e1;
        let _0x341ade = _0x3c104a[_0x433fae];
        return _0x341ade;
    }, _0xf93f(_0x3115fc, _0x553f55);
}
renderer[_0x46c415(0x216)](window[_0x46c415(0x1fc)], window['innerHeight']), document[_0x46c415(0x202)][_0x46c415(0x21c)](renderer['domElement']);
const particleCount = 0x2710, particlesGeometry = new _0x53b1eb[(_0x46c415(0x1e2))](), particlesPosition = new Float32Array(particleCount * 0x3), particlesColor = new Float32Array(particleCount * 0x3), particleColors = [
        0x383838,
        0x727372,
        0x574f4d,
        0x594d44
    ];
function _0x13de() {
    const _0xe1f385 = [
        'aspect',
        'Scene',
        'background',
        'sin',
        '10ibGcEE',
        '1VwObAj',
        'opacity',
        'size',
        'constructor',
        'resize',
        'random',
        '53853EqFvsq',
        'mousemove',
        'console',
        '1929645FCGSMj',
        'ShaderMaterial',
        'push',
        '53662FdwZWj',
        '112HXyrEk',
        'addEventListener',
        'CircleGeometry',
        'error',
        'trace',
        'value',
        'innerWidth',
        '230560UBJkgh',
        '3350512fAxHgt',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec3\x20color;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20opacity;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20vec2\x20resolution;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20radius;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20dist\x20=\x20length(vUv\x20-\x20vec2(0.55));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20float\x20blur\x20=\x20smoothstep(radius,\x20radius\x20+\x200.4,\x20dist);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20col\x20=\x20vec4(color,\x20opacity\x20*\x20(1.0\x20-\x20blur));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_FragColor\x20=\x20col;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'forEach',
        'warn',
        'body',
        'innerHeight',
        'PointsMaterial',
        'setAttribute',
        '__proto__',
        'add',
        '931638rkVteB',
        'render',
        'info',
        'PerspectiveCamera',
        'position',
        'lookAt',
        'clientX',
        'transparent',
        'Color',
        'rotation',
        'now',
        'WebGLRenderer',
        'BufferAttribute',
        '25TOPkNq',
        'setSize',
        'floor',
        'Mesh',
        'Vector2',
        'clientY',
        'bind',
        'appendChild',
        'prototype',
        'toString',
        'length',
        'Points',
        'BufferGeometry',
        '32366FmhsfK'
    ];
    _0x13de = function () {
        return _0xe1f385;
    };
    return _0x13de();
}
for (let i = 0x0; i < particleCount; i++) {
    particlesPosition[i * 0x3] = (Math[_0x46c415(0x1ee)]() - 0.5) * 0x14, particlesPosition[i * 0x3 + 0x1] = (Math[_0x46c415(0x1ee)]() - 0.5) * 0x14, particlesPosition[i * 0x3 + 0x2] = (Math[_0x46c415(0x1ee)]() - 0.5) * 0x14;
    const color = new _0x53b1eb[(_0x46c415(0x210))](particleColors[Math[_0x46c415(0x217)](Math['random']() * particleColors['length'])]);
    particlesColor[i * 0x3] = color['r'], particlesColor[i * 0x3 + 0x1] = color['g'], particlesColor[i * 0x3 + 0x2] = color['b'];
}
particlesGeometry[_0x46c415(0x205)](_0x46c415(0x20c), new _0x53b1eb[(_0x46c415(0x214))](particlesPosition, 0x3)), particlesGeometry['setAttribute']('color', new _0x53b1eb[(_0x46c415(0x214))](particlesColor, 0x3));
const _0xce87ef = {};
_0xce87ef['vertexColors'] = !![], _0xce87ef[_0x46c415(0x1eb)] = 0.01, _0xce87ef[_0x46c415(0x20f)] = !![], _0xce87ef[_0x46c415(0x1ea)] = 0.5;
const particlesMaterial = new _0x53b1eb[(_0x46c415(0x204))](_0xce87ef), particles = new _0x53b1eb[(_0x46c415(0x1e1))](particlesGeometry, particlesMaterial);
scene[_0x46c415(0x207)](particles);
function createCircle(_0x462043, _0x3ccf6f) {
    const _0x5683e6 = _0x46c415, _0x36bf2f = (function () {
            let _0x147dbe = !![];
            return function (_0x4f1a5f, _0x22f028) {
                const _0x5e230a = _0x147dbe ? function () {
                    if (_0x22f028) {
                        const _0x3c4468 = _0x22f028['apply'](_0x4f1a5f, arguments);
                        return _0x22f028 = null, _0x3c4468;
                    }
                } : function () {
                };
                return _0x147dbe = ![], _0x5e230a;
            };
        }()), _0x2d0cd2 = _0x36bf2f(this, function () {
            const _0x5ddac0 = _0xf93f, _0x5447bc = function () {
                    let _0x4a2e86;
                    try {
                        _0x4a2e86 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                    } catch (_0x366bbe) {
                        _0x4a2e86 = window;
                    }
                    return _0x4a2e86;
                }, _0x5a9f9b = _0x5447bc(), _0x24bb2a = _0x5a9f9b['console'] = _0x5a9f9b[_0x5ddac0(0x1f1)] || {}, _0x598459 = [
                    'log',
                    _0x5ddac0(0x201),
                    _0x5ddac0(0x20a),
                    _0x5ddac0(0x1f9),
                    'exception',
                    'table',
                    _0x5ddac0(0x1fa)
                ];
            for (let _0x503633 = 0x0; _0x503633 < _0x598459[_0x5ddac0(0x21f)]; _0x503633++) {
                const _0x4e2bee = _0x36bf2f[_0x5ddac0(0x1ec)][_0x5ddac0(0x21d)][_0x5ddac0(0x21b)](_0x36bf2f), _0x4f1f38 = _0x598459[_0x503633], _0x42e1d0 = _0x24bb2a[_0x4f1f38] || _0x4e2bee;
                _0x4e2bee[_0x5ddac0(0x206)] = _0x36bf2f['bind'](_0x36bf2f), _0x4e2bee[_0x5ddac0(0x21e)] = _0x42e1d0[_0x5ddac0(0x21e)]['bind'](_0x42e1d0), _0x24bb2a[_0x4f1f38] = _0x4e2bee;
            }
        });
    _0x2d0cd2();
    const _0x497b7a = new _0x53b1eb[(_0x5683e6(0x1f8))](_0x462043, 0x20), _0xb7ed9a = {};
    _0xb7ed9a[_0x5683e6(0x1fb)] = 0x1;
    const _0x136a55 = {};
    _0x136a55[_0x5683e6(0x1fb)] = _0x462043;
    const _0x527b78 = new _0x53b1eb[(_0x5683e6(0x1f3))]({
            'uniforms': {
                'color': { 'value': new _0x53b1eb[(_0x5683e6(0x210))](_0x3ccf6f) },
                'opacity': _0xb7ed9a,
                'resolution': { 'value': new _0x53b1eb[(_0x5683e6(0x219))](window['innerWidth'], window[_0x5683e6(0x203)]) },
                'radius': _0x136a55
            },
            'vertexShader': '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20varying\x20vec2\x20vUv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main()\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vUv\x20=\x20uv;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vec4\x20modelViewPosition\x20=\x20modelViewMatrix\x20*\x20vec4(position,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position\x20=\x20projectionMatrix\x20*\x20modelViewPosition;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
            'fragmentShader': _0x5683e6(0x1ff),
            'transparent': !![],
            'depthWrite': ![]
        }), _0x36f0ac = new _0x53b1eb[(_0x5683e6(0x218))](_0x497b7a, _0x527b78);
    return _0x36f0ac;
}
const colors = [
        0xf4f3ee,
        0xcfdbd5,
        0x778da9,
        0xf0ebd8,
        0xf2d492
    ], circlesCount = 0x12c, circlesArray = [];
for (let i = 0x0; i < circlesCount; i++) {
    const radius = Math[_0x46c415(0x1ee)]() * 0.2 + 0.05, color = colors[Math[_0x46c415(0x217)](Math[_0x46c415(0x1ee)]() * colors[_0x46c415(0x21f)])], circle = createCircle(radius, color);
    circle[_0x46c415(0x20c)]['x'] = (Math[_0x46c415(0x1ee)]() - 0.5) * 0x32, circle[_0x46c415(0x20c)]['z'] = (Math['random']() - 0.5) * 0x1e, circle[_0x46c415(0x20c)]['y'] = (Math[_0x46c415(0x1ee)]() - 0.5) * 0x32, scene[_0x46c415(0x207)](circle), circlesArray[_0x46c415(0x1f4)](circle);
}
document['addEventListener'](_0x46c415(0x1f0), _0x19f365 => {
    const _0xf52a8 = _0x46c415, _0x4e0dea = _0x19f365[_0xf52a8(0x20e)] / window[_0xf52a8(0x1fc)] * 0x2 - 0x1, _0x12fdf0 = -(_0x19f365[_0xf52a8(0x21a)] / window['innerHeight']) * 0x2 + 0x1;
    camera[_0xf52a8(0x20c)]['x'] = _0x4e0dea * 0.5, camera[_0xf52a8(0x20c)]['y'] = _0x12fdf0 * 0.5, camera[_0xf52a8(0x20d)](0x0, 0x0, 0x0);
});
function animate() {
    const _0x572ba4 = _0x46c415;
    requestAnimationFrame(animate), circlesArray[_0x572ba4(0x200)](_0x4893b4 => {
        const _0x2a85af = _0x572ba4;
        _0x4893b4[_0x2a85af(0x20d)](camera[_0x2a85af(0x20c)]);
    }), particles[_0x572ba4(0x211)]['y'] += 0.001, circlesArray['forEach'](_0x5eb401 => {
        const _0x2ce024 = _0x572ba4;
        _0x5eb401[_0x2ce024(0x20c)]['y'] += Math[_0x2ce024(0x1e7)](Date[_0x2ce024(0x212)]() * 0.001) * 0.002;
    }), renderer[_0x572ba4(0x209)](scene, camera);
}
window[_0x46c415(0x1f7)](_0x46c415(0x1ed), () => {
    const _0x2adc74 = _0x46c415, _0x482f88 = window['innerWidth'], _0x480f00 = window[_0x2adc74(0x203)];
    renderer[_0x2adc74(0x216)](_0x482f88, _0x480f00), camera[_0x2adc74(0x1e4)] = _0x482f88 / _0x480f00, camera['updateProjectionMatrix']();
}), animate();