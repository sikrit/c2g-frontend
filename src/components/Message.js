import React, { useEffect, useState } from 'react'
import { Avatar, Row, Col } from 'antd'
import { animateScroll } from 'react-scroll'

const re = /:([\w]+):/g

function Message (props) {
  const [matched, setMatched] = useState(false)
  const [gif, setGif] = useState([])

  useEffect(() => {
    if (props.message.match(re)) {
      setMatched(true)
      const a = props.message.match(re)

      for (let i = 0; i < a.length; i++) {
        const element = a[i]
        console.log(element)

        switch (element) {
          case ':medic:':
            new Audio('https://wiki.teamfortress.com/w/images/8/8d/Demoman_medic03.wav').play()
            setGif(gif => gif.concat(<img src={'https://media.giphy.com/media/WseBPTW8tmlr2/giphy.gif'} width={'100%'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break

          case ':gachi:':
            new Audio('https://www.myinstants.com/media/sounds/rip-ears.mp3').play()
            setGif(gif => gif.concat(<img src={'https://cdn.betterttv.net/emote/59143b496996b360ff9b807c/3x'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break

          case ':clap:':
            new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/3x'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':bass:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://cdn.betterttv.net/emote/5c393177fb40bc09d7c6c3aa/3x'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':ja:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://cdn.betterttv.net/emote/59f4e1432c047947fb7e0c7b/3x'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':xd:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://discordemoji.com/assets/emoji/xd.gif'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':help:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://discordemoji.com/assets/emoji/3925_help.gif'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':pingu:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://discordemoji.com/assets/emoji/Nootnoot.gif'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':pear:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://discordemoji.com/assets/emoji/PearThink.png'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':mm:':
            //   new Audio('https://www.myinstants.com/media/sounds/clap-clap-clap.mp3').play()
            setGif(gif => gif.concat(<img src={'https://discordemoji.com/assets/emoji/1102_belledell1.gif'} width={'90px'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
          case ':aaa:':
            new Audio('https://www.myinstants.com/media/sounds/five-nights-at-freddys-full-scream-sound_1.mp3').play()
            setGif(gif => gif.concat(<img src={'https://media.giphy.com/media/IaWnztH7MR0jGZUVXx/giphy.gif'} width={'100%'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break

          default:
            new Audio('https://www.myinstants.com/media/sounds/spongebob-fail.mp3').play()
            setGif(gif => gif.concat(<img src={'https://media.giphy.com/media/OKEYg2ISpaedy/giphy.gif'} width={'100%'} height={'100%'} style={{ borderRadius: 5 }} alt='gif...' onLoad={() => {
              animateScroll.scrollToBottom({
                containerId: 'messagesChat',
                delay: 0,
                duration: 100
              })
            }} />))
            break
        }
      }
    }
  }, [props.message])

  return (
    <div className='message-box' style={{ marginLeft: 10 }}>
      <div
        style={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 0,
          paddingBottom: 0
        }}
      >
        {props.showUser && (
          <div style={{ marginTop: 10 }}>
            <Avatar size='small' src={`https://avatars.dicebear.com/v2/human/${props.user}.svg`} /> {props.user}
          </div>
        )}
        <Row>
          <Col span={24} style={{ display: 'flex' }}>
            <div
              style={{
                display: 'inline-block',
                wordBreak: 'break-word',
                backgroundColor: props.bgcolor,
                background: props.background,
                color: props.color,
                marginTop: 3,
                marginBottom: 3,
                fontWeight: 'bold',
                borderRadius: 10,
                //        wordBreak: 'break-all',
                padding: 7,
                borderStyle: 'solid',
                borderColor: '#A9A9A9',
                borderWidth: 1
              }}
            >
              {(() => {
                if (matched) {
                  return (
                    <div>
                      {gif.map((i) => {
                        return (i)
                      })}
                    </div>
                  )
                }
                if (props.thumbnail) {
                  return (
                    <div>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={`https://coub.com/view/${props.link}`}
                        style={{ display: 'grid' }}
                      >
                        {props.message}
                        <img src={props.thumbnail} alt='Coub thumbnail' />
                      </a>
                    </div>
                  )
                }
                return props.message
              })()}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  margin: 0,
                  fontWeight: 'lighter',
                  fontSize: '0.8em'
                }}
              >
                {props.time}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Message
