<template>
  <div class="vueContainer">
    <form>
      <label for="characterFormProfilInput">Nom du profil</label>
      <input
        id="characterFormProfilInput"
        class="form-control"
        name="characterFormProfilInput"
        list="characterFormProfilInputList"
        required
      />
      <datalist id="characterFormProfilInputList">
        <!-- <option value="VALEUR">VALEUR</option> options à rajouter via api -->
      </datalist>
      <div id="characterFormButtonContainer">
        <button id="characterFormSend" class="btn btn-dark" type="button">
          Envoyer
        </button>
        <!-- <button id="characterFormCancel" class="btn btn-danger" type="button">
        Annuler
      </button> -->
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>
