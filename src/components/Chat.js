import React, { useState, useEffect, useMemo, useContext } from 'react'
import { Input, Avatar, Divider, Button, Row, Col, Badge, Typography } from 'antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
import { animateScroll } from 'react-scroll'
import SocketContext from '../SocketContext'
import Message from './Message.js'

const { Text } = Typography

function isEmpty (str) {
  return str.replace(/^\s+|\s+$/gm, '').length === 0
}

function Chat (props) {
  const [messages, setMessages] = useState([])
  const [inputText, setInputText] = useState('')

  const socket = useContext(SocketContext)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    socket.on(
      'gotMessage',
      (message) => {
        setMessages(messages => messages.concat(message)) //  /facebook/react/issues/15041
      }
    )
  }, [])

  const users = props.users.map((item, i) => {
    if (item) {
      if (item.owner) {
        props.setOwner(item.id)
      }
      if (item.id === socket.id) {
        return <div key={item.id}>
          <Row className={'user'}>
            <Col span={3}>
              <Avatar alt={'Avatar'} src={`https://avatars.dicebear.com/v2/human/${item.username}.svg`} size={'large'} />
            </Col>
            <Col span={21}>
              <Text mark className={'userList'}>{item.username}</Text> {item.owner && <Badge style={{ marginLeft: 5 }} status='success' title={'Room owner'} />}
            </Col>
          </Row>
        </div>
      } else {
        return <div key={item.id}>
          <Row className={'user'}>
            <Col span={3}>
              <Avatar alt={'Avatar'} src={`https://avatars.dicebear.com/v2/human/${item.username}.svg`} size={'large'} />
            </Col>
            <Col span={21}>
              <Text className={'userList'}>{item.username}</Text> {item.owner && <Badge style={{ marginLeft: 5 }} status='success' title={'Room owner'} />}
            </Col>
          </Row>
        </div>
      }
    }
  }
  )

  return (
    <div>
      <div style={{ margin: 10, padding: 25, borderRadius: 15 }}>
        <div className='usersChat' style={{ margin: 10 }}>
          <div className='userChat'>
            User List
            {
              users
            }
          </div>
        </div>
        <Divider dashed style={{ marginBottom: 10, marginTop: 0 }} />
        <div>
          <div
            className='messagesChat'
            id='messagesChat'
            style={{ height: '45vh', overflowY: 'scroll' }}
          >
            {
              messages.map((message, index, array) => {
                let showSender = true
                if (
                  array.length > 1 &&
                    array[index - 1]
                ) {
                  if (array[index].from === array[index - 1].from) {
                    showSender = false
                  }
                  if (!props.history && array[index - 1].from === 'Coub') {
                    showSender = false
                  }
                }
                if (message.userId === socket.id) {
                  return (
                    <Message
                      key={index}
                      showUser={showSender}
                      user={message.from}
                      time={message.time}
                      message={message.message}
                    />
                  )
                } else if (message.userId === 'System' && message.from === 'System') {
                  return (
                    <Message
                      key={index}
                      showUser={showSender}
                      color='white'
                      background='radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
                      user={message.from}
                      time={message.time}
                      message={message.message}
                    />
                  )
                } else if (message.userId === 'System' && message.from === 'Coub') {
                  // ios_mosaic
                  const thumbnailLink = message.thumbnail.replace('%{version}', 'tiny')
                  if (props.history) {
                    return (
                      <Message
                        key={index}
                        thumbnail={thumbnailLink}
                        link={message.link}
                        showUser={showSender}
                        color='white'
                        background='linear-gradient(to top, #141e30, #243b55)'
                        user={message.from}
                        time={message.time}
                        message={message.message}
                      />
                    )
                  }
                } else {
                  return (
                    <Message
                      key={index}
                      showUser={showSender}
                      color='white'
                      background='linear-gradient(to bottom, #396afc, #2948ff)'
                      user={message.from}
                      time={message.time}
                      message={message.message}
                    />
                  )
                }
                return true
              }
              )
            }
          </div>
        </div>

        <Divider dashed style={{ marginBottom: 10, marginTop: 0 }} />
        <Row>
          <Col span={22}>
            <Input
              onChange={event => {
                setInputText(event.target.value)
              }}
              value={inputText}
              placeholder='Message ...'
              onPressEnter={event => {
                if (!isEmpty(inputText)) {
                  socket.emit('message', {
                    userId: socket.id,
                    from: props.username,
                    message: inputText,
                    time: new Date().toLocaleTimeString('it-IT')
                  })
                  setInputText('')
                }
              }}
            />
          </Col>
          <Col span={2} push={1}>
            <Button
              type='primary'
              shape='circle'
              icon='caret-right'
              size='default'
              onClick={() => {
                if (!isEmpty(inputText)) {
                  socket.emit('message', {
                    userId: socket.id,
                    from: props.username,
                    message: inputText,
                    time: new Date().toLocaleTimeString('it-IT')
                  })
                }
                setInputText('')
              }}
            />
          </Col>
        </Row>
      </div>
    </div>
  )
}

function scrollToBottom () {
  animateScroll.scrollToBottom({
    containerId: 'messagesChat',
    delay: 0,
    duration: 100
  })
}

export default Chat
