/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext } from "react"
import { Fragment_fd0e7cb8f9fb4669a6805377d925fba0 } from "/utils/stateful_components"
import { Container, Divider, Heading, option, Select } from "@chakra-ui/react"
import { EventLoopContext, StateContexts } from "/utils/context"
import "focus-visible/dist/focus-visible"
import { Event } from "/utils/state"
import NextHead from "next/head"



export function Select_5e5c6d931d4faaf2c4ebf88371afe8c9 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_1278fdcf53f69fffb9885347b6dd9dba = useCallback((_e0) => addEvents([Event("state.select_state.set_option", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Select onChange={on_change_1278fdcf53f69fffb9885347b6dd9dba} placeholder={`Select an example.`} variant={`filled`}>
  <option value={["Blade Runner (1982)", "vhf"]}>
  {`["Blade Runner (1982)", "vhf"]`}
</option>
  <option value={["Alien : Le 8ème Passager (1979)", "vhf"]}>
  {`["Alien : Le 8ème Passager (1979)", "vhf"]`}
</option>
  <option value={["2001 : L'Odyssée de l'espace (1968)", "VhF"]}>
  {`["2001 : L'Odyssée de l'espace (1968)", "VhF"]`}
</option>
  <option value={["Matrix (1999)", "DVD"]}>
  {`["Matrix (1999)", "DVD"]`}
</option>
  <option value={["Interstellar (2014)", "dvD"]}>
  {`["Interstellar (2014)", "dvD"]`}
</option>
  <option value={["L'Empire contre-attaque (1980)", "vhf"]}>
  {`["L'Empire contre-attaque (1980)", "vhf"]`}
</option>
  <option value={["Retour vers le futur (1985)", "vhf"]}>
  {`["Retour vers le futur (1985)", "vhf"]`}
</option>
  <option value={["La Guerre des Étoiles (1977)", "vhf"]}>
  {`["La Guerre des Étoiles (1977)", "vhf"]`}
</option>
  <option value={["L'Armée des 12 singes (1995)", "dVd"]}>
  {`["L'Armée des 12 singes (1995)", "dVd"]`}
</option>
  <option value={["Terminator 2 : Le Jugement dernier (1991)", "DVD"]}>
  {`["Terminator 2 : Le Jugement dernier (1991)", "DVD"]`}
</option>
</Select>
  )
}

export function Select_04874153ba9d1e7f67605a35c0f6f2d5 () {
  const [addEvents, connectError] = useContext(EventLoopContext);

  const on_change_1278fdcf53f69fffb9885347b6dd9dba = useCallback((_e0) => addEvents([Event("state.select_state.set_option", {value:_e0.target.value})], (_e0), {}), [addEvents, Event])

  return (
    <Select onChange={on_change_1278fdcf53f69fffb9885347b6dd9dba} placeholder={`Select an example.`} variant={`filled`}>
  <option value={["Paul", "Blade Runner"]}>
  {`["Paul", "Blade Runner"]`}
</option>
  <option value={["Lucie"]}>
  {`["Lucie"]`}
</option>
  <option value={["Zoé", "Terminator 2 : Le Jugement dernier"]}>
  {`["Zoé", "Terminator 2 : Le Jugement dernier"]`}
</option>
</Select>
  )
}

export function Heading_c41acc6487a3a197def89d41372971c3 () {
  const state__select_state = useContext(StateContexts.state__select_state)


  return (
    <Heading>
  {state__select_state.option}
</Heading>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment_fd0e7cb8f9fb4669a6805377d925fba0/>
  <Container sx={{"bg": "#ededed", "margin": "auto", "padding": "1em", "borderRadius": "0.5em", "shadow": "lg"}}>
  <Heading_c41acc6487a3a197def89d41372971c3/>
  <Select_5e5c6d931d4faaf2c4ebf88371afe8c9/>
  <Select_04874153ba9d1e7f67605a35c0f6f2d5/>
  <Divider/>
</Container>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
