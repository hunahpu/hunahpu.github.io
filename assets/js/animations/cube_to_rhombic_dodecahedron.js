var camera, scene, renderer;
var geometry, material, mesh;
var dual
var mesh2
var i1,i2,i3,i4
var d1,d2,d3,d4
var CANVAS_WIDTH = 300;
var CANVAS_HEIGHT = 300;

var t
init();
animate();

function init() {
 t=0

 	scene = new THREE.Scene();
 camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
camera.position.x = 17*3;
camera.position.y = 12*3;
camera.position.z = 13*3;
camera.lookAt(scene.position);



  geometry = new THREE.Geometry();
  geometry.verticesNeedUpdate = true;
  geometry.vertices.push( new THREE.Vector3( 10, 10, 10 ) ); //0
  geometry.vertices.push( new THREE.Vector3( 10, 10, -10 ) );//1
  geometry.vertices.push( new THREE.Vector3( 10, -10, -10 ) );//2
  geometry.vertices.push( new THREE.Vector3( 10, -10, 10 ) );//3
  geometry.vertices.push( new THREE.Vector3( -10, 10, 10 ) );//4
  geometry.vertices.push( new THREE.Vector3( -10, 10, -10 ) );//5
  geometry.vertices.push( new THREE.Vector3( -10, -10, 10 ) );//6
  geometry.vertices.push( new THREE.Vector3( -10, -10, -10 ) );//7
  i = new THREE.Vector3( 10, 0, 0 )
  j = new THREE.Vector3( 0, 10, 0 )
  k = new THREE.Vector3( 0, 0, 10 )
  m_i = new THREE.Vector3( -10, 0, 0 )
  m_j = new THREE.Vector3( 0, -10, 0 )
  m_k = new THREE.Vector3( 0, 0, -10 )

  fi = new THREE.Vector3( 20, 0, 0 )
  fj = new THREE.Vector3( 0, 20, 0 )
  fk = new THREE.Vector3( 0, 0, 20 )
  m_fi = new THREE.Vector3( -20, 0, 0 )
  m_fj = new THREE.Vector3( 0, -20, 0 )
  m_fk = new THREE.Vector3( 0, 0, -20 )

  geometry.vertices.push( i );//8
  geometry.vertices.push( j );//9
  geometry.vertices.push( k );//10
  geometry.vertices.push( m_k );//11
  geometry.vertices.push( m_i);//12
  geometry.vertices.push( m_j );//13


  var face = new THREE.Face3(0, 3, 8);
  geometry.faces.push(face);
  var face = new THREE.Face3(0, 8, 1);
  geometry.faces.push(face);
  var face = new THREE.Face3(2, 1, 8);
  geometry.faces.push(face);
  var face = new THREE.Face3(2, 8, 3);
  geometry.faces.push(face);

  var face = new THREE.Face3(0, 1, 9);
  geometry.faces.push(face);
  var face = new THREE.Face3(9, 1, 5);
  geometry.faces.push(face);
  var face = new THREE.Face3(0, 9, 4);
  geometry.faces.push(face);
  var face = new THREE.Face3(9, 5, 4);
  geometry.faces.push(face);


  var face = new THREE.Face3(0, 4, 10);
  geometry.faces.push(face);
  var face = new THREE.Face3(0, 10, 3);
  geometry.faces.push(face);
  var face = new THREE.Face3(6, 10, 4);
  geometry.faces.push(face);
  var face = new THREE.Face3(6, 3, 10);
  geometry.faces.push(face);


  var face = new THREE.Face3(5, 1, 11);
  geometry.faces.push(face);
  var face = new THREE.Face3(11, 1, 2);
  geometry.faces.push(face);
  var face = new THREE.Face3(11, 2, 7);
  geometry.faces.push(face);
  var face = new THREE.Face3(5, 11, 7);
  geometry.faces.push(face);

  var face = new THREE.Face3(5, 12, 4);
  geometry.faces.push(face);
  var face = new THREE.Face3(5, 7, 12);
  geometry.faces.push(face);
  var face = new THREE.Face3(6, 12, 7);
  geometry.faces.push(face);
  var face = new THREE.Face3(6, 4, 12);
  geometry.faces.push(face);

  var face = new THREE.Face3(2, 13, 7);
  geometry.faces.push(face);
  var face = new THREE.Face3(2, 3, 13);
  geometry.faces.push(face);
  var face = new THREE.Face3(6, 7, 13);
  geometry.faces.push(face);
  var face = new THREE.Face3(6, 13, 3);
  geometry.faces.push(face);
  var mat = new THREE.MeshNormalMaterial({ flatShading: true , side:THREE.FrontSide, wireframe:false })

  mesh = new THREE.Mesh(geometry, mat);

  geometry.computeFaceNormals();
  geometry.computeVertexNormals();
  scene.add(mesh);

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );
  document.body.appendChild( renderer.domElement );

}


var dir=0
function animate() {

	requestAnimationFrame( animate );

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;
  if(t<0)
  dir = 0
  if(t>1)
    dir=1
  if(dir==0){
    t+=0.00001
    aux = map(t,i,fi)
    geometry.vertices[8].set(aux.x,aux.y,aux.z)
    aux = map(t,j,fj)
    geometry.vertices[9].set(aux.x,aux.y,aux.z)
    aux = map(t,k,fk)
    geometry.vertices[10].set(aux.x,aux.y,aux.z)
    aux = map(t,m_i,m_fi)
    geometry.vertices[12].set(aux.x,aux.y,aux.z)
    aux = map(t,m_j,m_fj)
    geometry.vertices[13].set(aux.x,aux.y,aux.z)
    aux = map(t,m_k,m_fk)
    geometry.vertices[11].set(aux.x,aux.y,aux.z)
  }
	renderer.render( scene, camera );
  geometry.verticesNeedUpdate = true;
}

function map(x,a,b,){
  return a.clone().lerp(b.clone(),x)
}
