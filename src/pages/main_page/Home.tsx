import React from 'react'
import Lottie from 'react-lottie'
import { HomePage } from './style/style'
import './css/bootstrap.min.css'
import animationData from './json/final_hero2.json'
// import animationDataMobile from './json/final_hero.json'
import animationBottom from './json/bottom_hero2.json'
import Typewriter from 'typewriter-effect'
import CountUp from 'react-countup'
// import FAQs from './FAQs'
// import Footer from './Footer'

// import Logo from "../../assets/svg/xtring_logo_wt.png";
// import DarkLogo from "../../assets/svg/xtring_logo-bk.png";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData
  }
  // const defaultOptionsMobile = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationDataMobile
  // }
  const defaultsBottom = {
    loop: true,
    autoplay: true,
    animationData: animationBottom
  }

  return (
    <>
      <HomePage>
        {/* <!-- banner --> */}
        <div id="banner" className="container-fluid ">
          <div className="row">
            <div className="col-md-6 banner_block banner_img">
              <Lottie
                options={defaultOptions}
                height={window.innerWidth >= 500 ? 450 : window.innerWidth < 400 ? 360 : 380}
                width={window.innerWidth >= 500 ? 450 : window.innerWidth < 400 ? 330 : 380}
              />

              {/* {window.innerWidth < 900 && <Lottie options={defaultOptionsMobile} height={400} width={300} />} */}
            </div>
            <div className="col-md-6 banner_block">
              <div className="banner_text">
                <h1 className="css-typing">
                  <span className="type1">Transfer tokens between</span>
                  <br />
                  {/* <span>
                  <span className="text_1">Ethereum &amp; Analog Chain</span>
                  <span className="text_2">BSC &amp; Analog Chain</span>
                  <span className="text_3">Polygon &amp; Analog Chain</span>
                  <span className="text_4">Tron &amp; Analog Chain</span>
                  </span><br/> */}
                  <Typewriter
                    options={{
                      strings: [
                        'Ethereum & Analog Chain',
                        'BSC & Analog Chain',
                        'Polygon & Analog Chain',
                        'Tron & Analog Chain'
                      ],
                      autoStart: true,
                      loop: true
                    }}
                  />
                  <span className="type3">via decentralized Bridge</span>
                </h1>
                <p>
                  <span className="robo type3">The Xtring Bridge </span> facilitates fast cross-chain transfers in any
                  direction within a <span className="robo type3">single interface.</span>
                </p>
                <a href="/#/router" target="_blank" className="main_btn" data-aos="zoom-in">
                  Try bridge
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- banner --> */}

        {/* <!-- bridged --> */}
        <div id="bridged" className="container-fluid ">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12 mb20">
              <p className="bridged_heading">
                $
                {/* <span id="count1" className="count" data-number="1000">
                  {' '}
                </span>{' '} */}
                <CountUp delay={2} end={1000} />
                {/* <a href="">
                  <i className="fa fa-line-chart" aria-hidden="true"></i>
                </a> */}
              </p>
              <p data-aos="zoom-in">Total bridged over time</p>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <p className="bridged_heading" data-aos="zoom-in">
                1-5 Min
              </p>
              <p data-aos="zoom-in">Transfer time</p>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <p className="bridged_heading" data-aos="zoom-in">
                $0.50
              </p>
              <p data-aos="zoom-in">
                Bridge fee{' '}
                <span>
                  (regular <span className="robo">0.3%</span>)
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* <!-- bridged --> */}

        {/* <!-- Our features --> */}
        <div id="our_features_area" className="container-fluid our_features mt100">
          <div className="row">
            <div className="col-md-12 div-center">
              <h2 className="features_title ">
                <img src="images/Our-features.png" style={{ width: '30px', marginRight: '8px' }} /> Our features
              </h2>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="our_features_block our-features1" data-aos="fade-right">
                <div className="feature-img">
                  <img src="images/decentralized-icon.png" />
                </div>
                <h4>Realistically Decentralised</h4>
                <p>
                  The DEO is able to limit the power of developers and prevent consolidation since it has ultimate say
                  over all property and transactions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="our_features_block blockblock" data-aos="fade-left">
                <div className="feature-img">
                  <img src="images/Multichain.png" />
                </div>
                <h4>Multichain</h4>
                {/* <p>Use resources from different blockchains by linking them together via a single Bridge.</p> */}
                <p>
                  By connecting many blockchains with a single Bridge, you may utilise resources from various
                  blockchains.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="our_features_block" data-aos="fade-right">
                <div className="feature-img">
                  <img src="images/transaction.png" />
                </div>
                <h4>Blazingly Quick Transaction</h4>
                <p>
                  The Analog blockchain allows for very fast financial transactions. Three seconds is the typical wait
                  time for a block.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-sm-12">
              <div className="our_features_block" data-aos="fade-left">
                <div className="feature-img">
                  <img src="images/almostliberated.png" />
                </div>
                <h4>Just almost liberated</h4>
                <p>
                  Analog&apos;s token transactions are orders of magnitude cheaper than those on Ethereum and similar
                  platforms.
                </p>
              </div>
            </div>

            {/* <div className="col-md-6 our_features_center">
              <div className="our_features_block">
                <img src="images/features-coin.svg" />
                <h4>Scalable</h4>
                <p>The Linear Sharding technique makes it feasible to achieve throughputs of millions of TPS.</p>
              </div>
            </div> */}

            {/* <div className="col-md-6">
                    <div className="our_features_block" >
                        <img src="images/features-chat.svg"/>
                        <h4>User-friendly design</h4>
                        <p>We aim to create a straightforward design that does not require users to read guides and documentation.</p>
                    </div>       
                </div> */}
          </div>
        </div>
        {/* <!-- Our features --> */}

        {/* <!-- our_supported_area --> */}
        <div id="our_supported_area" className="container-fluid our_features our_supported_area mt100">
          <div className="row">
            <div className="col-md-12 div-center">
              <h2 className="features_title ">
                <img src="images/blockchain.png" style={{ width: '30px', marginRight: '8px' }} />
                Our supported blockchains
                <br className="break_block" />
                <span className="tokenSpan"> and tokens </span>
              </h2>
            </div>

            <div className="col-md-12 mptb30">
              <div className="nav_li_area">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="active">
                    <a href="#1" role="tab" data-toggle="tab">
                      <img src="images/eth.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#2" role="tab" data-toggle="tab">
                      <img src="images/solana.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#3" role="tab" data-toggle="tab">
                      <img src="images/polygon.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#4" role="tab" data-toggle="tab">
                      <img src="images/bsc.svg" />
                    </a>
                  </li>
                  <li>
                    <a href="#4" role="tab" data-toggle="tab">
                      <img src="images/tron-trx-logo.svg" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* <!-- Tab panes --> */}
              <div className="tab-content">
                <div className="tab-pane fade in active" id="1">
                  <ul className="tab_area">
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade " id="2">
                  <ul className="tab_area">
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade " id="3">
                  <ul className="tab_area">
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade " id="4">
                  <ul className="tab_area">
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                    <li>
                      <img src="images/1.png" /> FTX Token
                    </li>
                    <li>
                      <img src="images/2.png" /> HAPI{' '}
                    </li>
                    <li>
                      <img src="images/3.png" /> HGET{' '}
                    </li>
                    <li>
                      <img src="images/4.png" /> USDC{' '}
                    </li>
                    <li>
                      <img src="images/5.png" /> USDT{' '}
                    </li>
                  </ul>
                </div>
                <div className="tab-pane fade " id="5"></div>
                <div className="tab-pane fade " id="6"></div>
                <div className="tab-pane fade " id="7"></div>
                <div className="tab-pane fade " id="8"></div>
                <div className="tab-pane fade " id="9"></div>
                <div className="tab-pane fade " id="10"></div>
                <div className="tab-pane fade " id="11"></div>
                <div className="tab-pane fade " id="12"></div>
                <div className="tab-pane fade " id="13"></div>
                <div className="tab-pane fade " id="14"></div>
              </div>
              {/* <!-- Tab panes --> */}
              <div className="col-md-12 text-center">
                <a href="" target="_blank" className="stroked_btn">
                  Apply to get your token listed
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- our_supported_area --> */}

        {/* <!-- Our features --> */}
        <div id="use_allbridge_area" className="container-fluid our_features use_allbridge mt100">
          <div className="row">
            <div className="col-md-12 div-center">
              <h2 className="features_title ">
                <img src="images/useXtring.png" style={{ width: '30px', marginRight: '8px' }} /> How to use Xtring?
              </h2>
            </div>

            <div className="col-md-12 relative">
              {/* <span className="use_allbridge_left">
                <span>
                  <strong>1.</strong> Connect wallet A
                </span>
                <span>
                  <strong>2.</strong> Connect wallet B
                </span>
              </span>

              <span className="use_allbridge_right">
                <span>
                  <strong>3.</strong> Connect wallet C
                </span>
                <span>
                  <strong>4.</strong> Receive assets
                </span>
              </span> */}
              {/* <img src="images/use-Allbridge.jpg" className="i100 db" /> */}
              {/* <img src="images/how-to-use-mob.png" className="i100 dn" /> */}
            </div>
          </div>
        </div>
        {/* <!-- Our features --> */}

        {/* <!-- Our token --> */}

        {/* <!-- Our token --> */}

        {/* <!-- Reports --> */}
        <div id="Reports_area" className="container-fluid our_features Reports">
          <div className="row">
            <div className="col-md-4 col-12 Order1">
              <div className="row">
                <div className="col-md-12  minorRight minorMargin">
                  <div className="reports_block connectPepper" data-aos="fade-right">
                    <div className="row">
                      <div className="reports_icon col-md-3 col-lg-2">
                        <img src="images/connect.png" />
                      </div>
                      <div className="col-md-9 col-lg-10">
                        <h4> Connect Pepper Wallet and MetaMask</h4>
                        <p>It is possible that you may want their installation before you can transmit money.</p>
                      </div>
                    </div>

                    {/* <a href="" target="_blank" className="stroked_btn">
                  Go to report
                </a> */}
                  </div>
                </div>
                <div className="col-md-12 minorMargin">
                  <div className="reports_block selectRoute" data-aos="fade-right">
                    <div className="row">
                      <div className="reports_icon col-md-3 col-lg-2">
                        <img src="images/route.png" />
                      </div>
                      <div className="col-md-9 col-lg-10">
                        <h4> Select the route</h4>
                        <p>
                          To get started, you need to make a decision about which route on the blockchain you wish to
                          pursue. Diagonal token exchange.
                        </p>
                      </div>
                    </div>

                    {/* <a href="" target="_blank" className="stroked_btn">
                  Go to report
                </a> */}
                  </div>
                </div>
              </div>
            </div>
            {window.innerWidth >= 992 && (
              <div
                className="col-md-4 col-12 Order2"
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Lottie
                  options={defaultsBottom}
                  height={window.innerWidth >= 1300 ? 375 : 300}
                  width={window.innerWidth >= 1300 ? 375 : 300}
                />
              </div>
            )}

            <div className="col-md-4 col-12 Order3">
              <div className="row">
                <div className="col-md-12 minorMargin minorLeft">
                  <div className="reports_block desiredToken " data-aos="fade-left">
                    <div className="row">
                      <div className="reports_icon col-md-3 col-lg-2">
                        <img src="images/desiredToken.png" />
                      </div>
                      <div className="col-md-9 col-lg-9">
                        <h4> Select a desired token</h4>
                        <p>
                          Pick a token from one or both networks to use for sending and receiving on the other network.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 minorMargin">
                  <div className="reports_block transferToken " data-aos="fade-left">
                    <div className="row">
                      <div className="reports_icon col-lg-2 col-md-3">
                        <img src="images/transferTokens.png" />
                      </div>
                      <div className="col-lg-10 col-md-9">
                        <h4>Transfer your tokens</h4>
                        <p>Token transfers that occur on different chains need authorisation from a wallet.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Reports --> */}

        {/* <!-- Our contacts --> */}
        {/* <div id="Faqs" className="container-fluid our_features our_contacts mt100">
          <div className="row">
            <div className="col-md-12 div-center">
              <h2 className="features_title ">
                <img src="images/faq.png" style={{width:"30px",marginRight:"8px"}}/> Frequently Asked Questions <span className='span-faqs'>(FAQS)</span> 
              </h2>
            </div>

            <div className="col-md-12">
              <FAQs />
            </div>
          </div>
        </div> */}
        {/* <!-- Our contacts --> */}

        {/* <!--==============================footer end================================--> */}
        {/* <Footer/> */}
      </HomePage>
    </>
  )
}
