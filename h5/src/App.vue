<template>
  <div id="app">
    <ul style="list-style:none;margin:0;padding:0;text-align:left;">
      <template v-for="(item,idx) in pages">
        <li
          :key="'page_'+idx"
          @click="dispatchPage(idx)">
          <span class="item">{{item.title}}
            <div class="chs">{{item.subtitle}}</div>
          </span>
        </li>
      </template>
    </ul>
  </div>
</template>
<style scoped>
li {
  padding: 0.8em;
  border-bottom: 1px solid #eaeaea;
}
li:active {
  background: #f4f4f4;
}
.item {
  display: block;
  background: no-repeat right center
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwEAYAAAAHkiXEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAAoRJREFUeNrt179L61AUwPFz0kZRh9BBB+kkxUGM0nNp/bGKFVFBwdI/wUEQHNxdOnXzHxBXBbUiFimi2KUQ0jgIOrVKhHbSDgaKRfOGPAvvPYSWp9xSzmcp6fTlHm7uDQBjjDHGGGOMMcYYY4wxCUI7oZ3QTnf3WGosNZbq65Pd89MU2QF/04paUStalvqgPqgPpRIREZEQsrt+StsNAHKQg5xtQx7ykO/vR0REvLgIr4XXwmtTU7Lzvlv7DQAAAFZW3HP33D3PZr1nTVNQQQWz2fBB+CB8MDMju7DjfZ4FVKEKVY6PhRBCCNf1fh1HkCBBsZjszv/lkx3wlefMc+Y58/4eiAaigejhoX/UP+ofHRlBE000x8chAhGIJBKDMAiDcHtbLpfL5fL9vezujhWPx+PxuM9Hj/RIj3t7f+6ItzdhCUtYq6uyOzve5yBEUiRFcnf3cxD0QR/0Ua+TSiqpiYTszo43aU/ak3ZPD13SJV3admMQp3RKp5Ylu69ZftkBrfIWure3vlxfri8fHSEgIASD3pngOLiAC7iwuSm7s1lteg39V+PLOAUpSJ2ceP/GYrAO67D++goGGGAsLZlooolXV7J7m9X2O8C7bmqaO+QOuUNnZ7AFW7A1PQ1RiEK0WnX33X13f36+YBbMgpnPy+5tFcoO+Iqu67quBwJdapfapWYygICAExOwARuw8fKibCvbyvbcnFEySkbJMGT3dgzvVTMwINIiLdI3N43D9Zqu6bpS8XaErsvu7FjegptmY+F/33IiT5GnyNPwsOy+79Z+Z8AszMJstQo1qEHt7k5xFEdxFheNoBE0gsWi7DzGGGOMMcYYY4wxxhhjjDHGWCt+AQ7J6F+fXYnsAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTEyLTA2VDExOjUxOjAyKzA4OjAwDV/r1QAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0xMi0wNlQxMTo1MTowMiswODowMHwCU2kAAABOdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX2huMGM5Ymp6cmRxL3NleS1Gb3J3YXJkLnN2Z+G1zWIAAAAASUVORK5CYII=);
  background-size: 24px 24px;
  -ms-touch-action: auto;
}
.chs {
  font-size: 0.8em;
  color: #838383;
}
</style>

<script>
export default {
  name: 'app',
  data () {
    return {
      pages: [
        {
          title: 'HelloH5',
          subtitle: 'H5Plus hello',
          url: 'helloh5_index.html'
        },
        {
          title: 'MUI',
          subtitle: 'MUI hello',
          url: 'hellomui_index.html'
        }
      ]
    }
  },
  components: {},
  onLoad () {
    var plus = this.$plus
    // 隐藏滚动条
    plus.webview.currentWebview().setStyle({
      scrollIndicator: 'none'
    })
    // Android处理返回键
    plus.key.addEventListener(
      'backbutton',
      function () {
        plus.os.name === 'iOS'
          ? plus.nativeUI.confirm(
            '确认退出？',
            function (e) {
              if (e.index > 0) {
                plus.runtime.quit()
              }
            },
            'Vue-H5+',
            ['取消', '确定']
          )
          : confirm('确认退出？') && plus.runtime.quit()
      },
      false
    )
  },
  methods: {
    dispatchPage (id) {
      var page = this.pages[id]
      this.startPage(page.url, page.title)
    }
  }
}
</script>
