<template>
  <header>
    <router-link to="/">
      <img
        src="https://www.onesaitplatform.online/web/pokemon-exercise/img/pokeball.eefa14c7.svg"
        alt="Back to home"
      />
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link to="/" activeClass="active" exact>
            <a>Home</a>
          </router-link>
        </li>
        <li>
          <router-link to="/pokemons/search" activeClass="active" exact>
            <a>Search</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>
