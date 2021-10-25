# -*- coding: utf-8 -*
import pyaudio
import numpy as np

fmt = pyaudio.paInt16  # 音声のフォーマット
ch = 1              # チャンネル1(モノラル)
sampling_rate = 44100 # サンプリング周波数
chunk = 1024       # チャンク（データ点数）
audio = pyaudio.PyAudio()
index = 1 # 録音デバイスのインデックス番号（デフォルト1）

stream = audio.open(format=fmt, channels=ch, rate=sampling_rate, input=True,
                        input_device_index = index,
                        frames_per_buffer=chunk)
print("recording start...")
    
all = []
# 録音処理
s = 0
while True:
    i = 0
    data = np.frombuffer(stream.read(chunk),dtype="int16")
    for sample in data:
        if s > 0 and sample < 0:
            i += 1
        s = sample
    if i > 300:
        print(i)