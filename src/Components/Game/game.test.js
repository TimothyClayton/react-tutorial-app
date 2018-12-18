import React from 'react'
import Game from './game'
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  shallow(<Game />)
})

it('sets the appropriate text of a clicked square', () => {
  let squares = Array(9).fill(null)
  const onClick = jest.fn()
  let wrapper = mount(<Game />)

  const square1 = wrapper.find('button.square').at(0)
  square1.simulate('click')
  expect(square1.text()).toEqual('X')

  const square2 = wrapper.find('button.square').at(3)
  square2.simulate('click')
  expect(square2.text()).toEqual('O')

  const square3 = wrapper.find('button.square').at(6)
  square3.simulate('click')
  expect(square3.text()).toEqual('X')

  const square4 = wrapper.find('button.square').at(8)
  square4.simulate('click')
  expect(square4.text()).toEqual('O')

  const square5 = wrapper.find('button.square').at(5)
  square5.simulate('click')
  expect(square5.text()).toEqual('X')

  const square6 = wrapper.find('button.square').at(2)
  square6.simulate('click')
  expect(square6.text()).toEqual('O')

  const square7 = wrapper.find('button.square').at(1)
  square7.simulate('click')
  expect(square7.text()).toEqual('X')

  const square8 = wrapper.find('button.square').at(4)
  square8.simulate('click')
  expect(square8.text()).toEqual('O')

  const square9 = wrapper.find('button.square').at(7)
  square9.simulate('click')
  expect(square9.text()).toEqual('X')
})

it('renders game status correctly', () => {
  const wrapper = mount(<Game />)
  const gameInfoTurn1 = wrapper.find('div.game-info').children().first().text()
  expect(gameInfoTurn1).toEqual('Next player: X')

  const button = wrapper.find('button.square').first()
  button.simulate('click')
  const gameInfoTurn2 = wrapper.find('div.game-info').children().first().text()
  expect(gameInfoTurn2).toEqual('Next player: O')

  const turn2 = wrapper.find('button.square').at(1)
  turn2.simulate('click')

  const turn3 = wrapper.find('button.square').at(4)
  turn3.simulate('click')

  const turn4 = wrapper.find('button.square').at(5)
  turn4.simulate('click')

  const turn5 = wrapper.find('button.square').at(8)
  turn5.simulate('click')

  const winner = wrapper.find('div.game-info').children().first().text()
  expect(winner).toEqual('Winner: X')
})
