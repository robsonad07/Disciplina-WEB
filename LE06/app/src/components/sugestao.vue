<script setup>
  defineProps({
      img: String,
      nome: String,
    });
</script>

<template>
  <ul id="sugestoes-perfil">
    <li class="sugestoes-perfil-itens">
      <img v-bind:src="img" class="rounded-circle" alt="Foto de perfil" height="48" width="48" />
      <a href="">{{nome}}</a>
      <button type="button" class="btn btn-primary">Seguir</button>
    </li>
  </ul>
</template>

<style>
  #sugestoes-perfil{
    padding-left: 10px;
    text-decoration: none;
  }

  #sugestoes-perfil .sugestoes-perfil-itens{
    display: flex;
    align-items: center;
    margin: 5px;
    justify-content: space-evenly;
  }
</style>