import * as THREE from "https://threejsfundamentals.org/threejs/resources/threejs/r125/build/three.module.js";

export default class {
	constructor(materialDataForBox, lightingAffected = false) {
		this._materialDataForBox = materialDataForBox;
		this._lightingAffected = lightingAffected;
		this._cubeGeometry = new THREE.BoxGeometry();
		this._setMaterialForGeometry();
		this._createBoxElement();
	}

	_setMaterialForGeometry() {
		this._materialDataForBox = this._checkAndFormatMaterialData();
		this._checkLightingInteractionAndSetMaterial();
	}

	_createBoxElement() {
		this.cubeMesh = new THREE.Mesh(this._cubeGeometry, this._cubeMaterial);
	}

	_checkLightingInteractionAndSetMaterial() {
		this._cubeMaterial = this._lightingAffected
			? new THREE.MeshPhongMaterial(this._materialDataForBox)
			: new THREE.MeshBasicMaterial(this._materialDataForBox);
	}

	_checkAndFormatMaterialData() {
		if (!this._materialDataForBox) {
			throw new Error(`Add material color or texture to box constructor`);
		} else if (typeof this._materialDataForBox === "number") {
			return { color: this._materialDataForBox };
		} else if (typeof this._materialDataForBox === "string") {
			const cubeTexture = new THREE.TextureLoader().load(
				this._materialDataForBox
			);
			return { map: cubeTexture };
		}
	}

	changeXPosition(newPositionX) {
		this.cubeMesh.position.x = newPositionX;
	}
	changeYPosition(newPositionY) {
		this.cubeMesh.position.y = newPositionY;
	}

	changeRotationXY(newRotationState, ...otherAxisRotationState) {
		let xRotation = newRotationState;
		let yRotation = newRotationState;

		if (otherAxisRotationState.length > 0) {
			yRotation = otherAxisRotationState[0];
		}
		this.cubeMesh.rotation.x = xRotation;
		this.cubeMesh.rotation.y = yRotation;
	}
}
