let scene, camera, renderer, cube, lightening, effect;

// function to initialize my scene, renderer and camera properties,
function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    effect = new THREE.AnaglyphEffect(renderer);
    effect.setSize(window.innerWidth, window.innerHeight);

    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // create my shape
    const geometry = new THREE.BoxGeometry(2, 2, 2);

    // right, left, top, bottom, front, back
    const cubeMaterials = [
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("./imgs/IMG_3531.JPG"),
            side: THREE.DoubleSide,
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("./imgs/IMG_3532.JPG"),
            side: THREE.DoubleSide,
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("./imgs/IMG_6086.JPG"),
            side: THREE.DoubleSide,
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("./imgs/IMG_6087.JPG"),
            side: THREE.DoubleSide,
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("./imgs/IMG_1925.JPG"),
            side: THREE.DoubleSide,
        }),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load("./imgs/IMG_1926.JPG"),
            side: THREE.DoubleSide,
        }),
    ];

    // create my material textures and colors
    // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
    // const textures = new THREE.TextureLoader().load("./textures/crate.gif");
    const material = new THREE.MeshFaceMaterial(cubeMaterials);
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    // lightening = new THREE.AmbientLight()
}

// function to animate my scene and call for update or any repetitions
function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;
    // cube.rotation.z += 0.01;

    renderer.render(scene, camera);
}

// function to make window responsive
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onWindowResize, false);

init();
animate();